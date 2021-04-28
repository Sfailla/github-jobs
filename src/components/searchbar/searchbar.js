import React from 'react'
import { Container } from './searchStyles'

export default function Searchbar({ children }) {
  return <Container>{children}</Container>
}

function SearchbarSection({ children, ...props }) {
  return <React.Fragment {...props}>{children}</React.Fragment>
}

Searchbar.Section = SearchbarSection
