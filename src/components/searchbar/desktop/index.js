import React from 'react'
import Searchbar from '..'
import { SearchIcon, LocationIcon } from '../../../assets/icons'
import { Wrapper, SvgWrapper } from './style'
import { SearchbarButton as Button } from '../../buttons'
import { useWindowSize } from '../../../hooks'

function SearchbarContainer({ handleSubmit, handleChange, handleCheck, checked }) {
  const { width } = useWindowSize()
  const isSmallScreen = width < 992

  return (
    <Searchbar onSubmit={handleSubmit}>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input name="search" onChange={handleChange} placeholder=" " />
          <Wrapper>
            <SearchIcon />
            <Searchbar.Label>
              {isSmallScreen ? 'Filter by title...' : 'Filter by title, companies, expertise...'}
            </Searchbar.Label>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input name="location" onChange={handleChange} placeholder=" " />
          <Wrapper>
            <SvgWrapper>
              <LocationIcon />
            </SvgWrapper>
            <Searchbar.Label>Filter by location...</Searchbar.Label>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Wrapper>
            <Searchbar.Checkbox name="full-time" onChange={handleCheck} checked={checked} />
            <Searchbar.Label bold>Full time only</Searchbar.Label>
            <Button type="submit" style={{ marginLeft: '1rem' }}>
              Search
            </Button>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </Searchbar>
  )
}

export default React.memo(SearchbarContainer)
