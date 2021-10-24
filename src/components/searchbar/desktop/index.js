import React from 'react'
import { SearchbarComponents as Searchbar } from '../components'
import { SearchIcon, LocationIcon } from '../../../assets/icons'
import { Wrapper, SvgWrapper } from '../components/searchbar/style'
import { SearchbarButton as Button } from '../../buttons'
import { useWindowSize } from '../../../hooks'

function DesktopSearchbar({ handleChange, handleCheck, checked }) {
  const { width } = useWindowSize()
  const isSmallScreen = width < 992

  return (
    <React.Fragment>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input id="job-search" name="search" onChange={handleChange} placeholder=" " />
          <Wrapper>
            <SearchIcon width={24} height={24} fill="#5964E0" />
            <Searchbar.Label htmlFor="job-search">
              {isSmallScreen ? 'Filter by title...' : 'Filter by title, companies, expertise...'}
            </Searchbar.Label>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input
            id="location-search"
            name="location"
            onChange={handleChange}
            placeholder=" "
          />
          <Wrapper>
            <SvgWrapper>
              <LocationIcon />
            </SvgWrapper>
            <Searchbar.Label htmlFor="location-search">Filter by location...</Searchbar.Label>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Wrapper>
            <Searchbar.Checkbox
              id="full-time"
              name="full-time"
              onChange={handleCheck}
              checked={checked}
            />
            <Searchbar.Label htmlFor="full-time" bold>
              Full time only
            </Searchbar.Label>
            <Button type="submit" style={{ marginLeft: '1rem' }}>
              Search
            </Button>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </React.Fragment>
  )
}

export default React.memo(DesktopSearchbar)
