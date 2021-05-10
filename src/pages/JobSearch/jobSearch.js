import React from 'react'
import { useFetchData } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'

export default function JobSearch() {
  const searchQuery = 'javascript'
  const pages = 1
  const query = `?description=${searchQuery}&pages=${pages}`
  const { results } = useFetchData(query)

  return (
    <Container>
      <GridContainer>
        {results.length && results.map(data => <Card key={data.id} data={data} />)}
      </GridContainer>
    </Container>
  )
}
