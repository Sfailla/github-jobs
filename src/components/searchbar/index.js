import React from 'react'
import { Container, Section } from './searchStyles'

// import useWindowSize from '../../hooks/useWindowSize';

import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg'
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg'
import { ReactComponent as CheckmarkIcon } from '../../assets/desktop/icon-check.svg'

export default function Searchbar({ children }) {
  return <Container>{children}</Container>
}

function SearchbarSection({ children, ...props }) {
  return <Section {...props}>{children}</Section>
}

Searchbar.Section = SearchbarSection
