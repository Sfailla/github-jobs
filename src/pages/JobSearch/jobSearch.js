import React from 'react'
import { useFetchData, useBuildQuery } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import Searchbar from '../../components/searchbar/desktop'
import { LayoutWrapper } from '../../styles/shared'

function JobSearch() {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = React.useCallback(() => setChecked(checked => !checked), [])

  const INITIAL_VALUES = {
    search: '',
    location: '',
    fullTime: ''
  }

  const [values, setValues] = React.useState(INITIAL_VALUES)

  function handleChange(event) {
    event.persist()

    setValues({
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(values)
  }

  const query = useBuildQuery()
  const { results, isLoading } = useFetchData(query)

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ checked, handleCheck, handleChange, handleSubmit }} />
        <GridContainer>
          {isLoading ? (
            <div>please wait while we load your data...</div>
          ) : (
            results.length > 0 && results.map(data => <Card key={data.id} data={data} />)
          )}
        </GridContainer>
      </LayoutWrapper>
    </Container>
  )
}

export default React.memo(JobSearch)
