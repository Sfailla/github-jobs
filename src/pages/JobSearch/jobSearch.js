import React from 'react'
import { useFetchData } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'

const CORS_PROXY = 'https://cors.bridged.cc/'
const BASE_URL = `${CORS_PROXY}https://jobs.github.com/positions.json`

export default function JobSearch() {
  const searchQuery = 'javascript'
  const pages = 1
  const query = `${BASE_URL}?description=${searchQuery}&pages=${pages}`
  const { results, isLoading } = useFetchData(query)

  return (
    <Container>
      <GridContainer>
        {isLoading && <div>please wait while we load your data...</div>}
        {results.length && results.map(data => <Card key={data.id} data={data} />)}
      </GridContainer>
    </Container>
  )
}
