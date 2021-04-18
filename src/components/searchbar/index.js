import React from 'react'
import Searchbar from './searchbar'
import InputGroup from './components/field'
import { SearchIcon } from '../../icons'

const SearchbarContainer = () => {
  return (
    <Searchbar>
      <Searchbar.Section>
        <InputGroup>
          <SearchIcon />
          <InputGroup.Label>Filter by title, companies, expertise…</InputGroup.Label>
          <InputGroup.Input />
        </InputGroup>
      </Searchbar.Section>
      <Searchbar.Section>This is section 2</Searchbar.Section>
      <Searchbar.Section>This is section 3</Searchbar.Section>
    </Searchbar>
  )
}

export default SearchbarContainer
