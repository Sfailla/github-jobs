import React from 'react'
import { Container, Section } from './searchStyles'

// import useWindowSize from '../../hooks/useWindowSize';

export default function Searchbar({ children }) {
  return <Container>{children}</Container>
}

function SearchbarSection({ children, ...props }) {
  return <Section {...props}>{children}</Section>
}

Searchbar.Section = SearchbarSection
