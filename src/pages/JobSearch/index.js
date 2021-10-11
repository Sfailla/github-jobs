import React from 'react'
import { useFormValidation } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import Searchbar from '../../components/searchbar'
import { LayoutWrapper } from '../../styles/shared'
import validate from './validateJobSearch'

const INITIAL_DATA = { search: null, location: null }

function JobSearch({ jobData, setUpdateQuery, isLoading }) {
  const [checked, setChecked] = React.useState(false)

  const { values, handleChange, handleSubmit } = useFormValidation(
    INITIAL_DATA,
    validate,
    submitRequest
  )

  function submitRequest() {
    setUpdateQuery({
      search: values.search,
      location: values.location,
      full_time: checked || null,
      page: 1
    })
  }

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ checked, setChecked, handleChange, handleSubmit }} />
        {isLoading && (
          <div style={{ paddingTop: '8rem' }}>please wait while we load your data...</div>
        )}
        {!isLoading && !jobData.length ? (
          <div style={{ paddingTop: '8rem' }}>
            Sorry no results were found 😕. Please try searching another job!
          </div>
        ) : (
          <GridContainer>
            {jobData.length > 0 && jobData.map(data => <Card key={data.id} data={data} />)}
          </GridContainer>
        )}
      </LayoutWrapper>
    </Container>
  )
}

export default React.memo(JobSearch)
