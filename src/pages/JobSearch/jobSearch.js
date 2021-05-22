import React from 'react'
import { useFetchData, useBuildQuery } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import Searchbar from '../../components/searchbar/desktop'
import { LayoutWrapper } from '../../styles/shared'

const INITIAL_VALUES = {
  search: null,
  location: null,
  full_time: false
}

function JobSearch() {
  const [checked, setChecked] = React.useState(false)
  const [{ search, location, full_time }, setValues] = React.useState(INITIAL_VALUES)
  const [updateQuery, setUpdateQuery] = React.useState({})

  const handleCheck = React.useCallback(() => setChecked(checked => !checked), [])

  function handleChange(event) {
    const { name, value } = event.target
    event.persist()

    setValues({ [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUpdateQuery({ search, location, full_time, page: 1 })
  }

  const query = useBuildQuery({ ...updateQuery })

  console.log(query)

  const { results, isLoading } = useFetchData(query)

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ checked, handleCheck, handleChange, handleSubmit }} />

        {isLoading && (
          <div style={{ paddingTop: '8rem' }}>please wait while we load your data...</div>
        )}

        {!isLoading && results.length < 1 ? (
          <div style={{ paddingTop: '8rem' }}>
            Sorry no results were found 😕. Please try searching another job!
          </div>
        ) : (
          <GridContainer>
            {results.length > 0 && results.map(data => <Card key={data.id} data={data} />)}
          </GridContainer>
        )}
      </LayoutWrapper>
    </Container>
  )
}

export default React.memo(JobSearch)
