import React from 'react'
import { Container, Header, Title, Content } from './style'

function SearchbarModal({ open, title }) {
  return open ? (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>modal content</Content>
    </Container>
  ) : null
}

export default SearchbarModal
