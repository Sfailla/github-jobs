import React from 'react'

import Searchbar from '../../components/searchbar'
import validate from './validateJobSearch'
import { useFormValidation } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import { LayoutWrapper } from '../../styles/shared'

function JobSearch({ jobData, setUpdateQuery, isLoading }) {
  const [checked, setChecked] = React.useState(false)
  const INITIAL_DATA = { search: 'javascript developer', location: '' }

  const { values, handleChange, handleSubmit } = useFormValidation(
    INITIAL_DATA,
    validate,
    submitRequest
  )

  function handleCheck() {
    setChecked(checked => !checked)
  }

  function submitRequest() {
    setUpdateQuery(prevState => ({
      ...prevState,
      search: values.search,
      location: values.location,
      fullTime: checked,
      page: 1
    }))
  }

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ handleChange, handleSubmit, handleCheck, checked }} />
        {isLoading ? (
          <div style={{ paddingTop: '8rem' }}>please wait while we load your data...</div>
        ) : (
          <GridContainer>
            {jobData?.results?.length > 0 ? (
              jobData.results.map(data => <Card key={data.id} data={data} />)
            ) : (
              <div style={{ paddingTop: '8rem' }}>
                Sorry no results were found 😕. Please try searching another job!
              </div>
            )}
          </GridContainer>
        )}
      </LayoutWrapper>
    </Container>
  )
}

export default React.memo(JobSearch)
