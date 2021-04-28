import React from 'react'
import Searchbar from './searchbar'
import InputGroup from './components/field/field'
import { SearchIcon, LocationIcon } from '../../icons'
import { Wrapper, SvgWrapper } from './components/field/fieldStyles'

const SearchbarContainer = () => {
  return (
    <Searchbar>
      <Searchbar.Section>
        <InputGroup>
          <Wrapper>
            <SearchIcon />
            <InputGroup.Label>Filter by title, companies, expertise…</InputGroup.Label>
          </Wrapper>
          <InputGroup.Input placeholder=" " />
        </InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <InputGroup>
          <Wrapper>
            <SvgWrapper>
              <LocationIcon />
            </SvgWrapper>
            <InputGroup.Label>Filter by location..</InputGroup.Label>
          </Wrapper>
          <InputGroup.Input placeholder=" " />
        </InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <InputGroup>
          <Wrapper>
            <InputGroup.Checkbox defaultChecked />
            <InputGroup.Label bold>Find a job</InputGroup.Label>
            <button>Click Me</button>
          </Wrapper>
        </InputGroup>
      </Searchbar.Section>
    </Searchbar>
  )
}

export default SearchbarContainer
