import React from 'react'

import { useFormValidation } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import { LayoutWrapper } from '../../styles/shared'
import Searchbar from '../../components/searchbar'
import validate from './validateJobSearch'

const INITIAL_DATA = { search: 'javascript developer', location: 'us' }

function JobSearch({ jobData, setUpdateQuery, isLoading }) {
  const { values, handleChange, handleSubmit } = useFormValidation(
    INITIAL_DATA,
    validate,
    submitRequest
  )

  function submitRequest() {
    setUpdateQuery(prevState => ({
      ...prevState,
      search: values.search,
      page: 1
    }))
  }

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ handleChange, handleSubmit }} />
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
