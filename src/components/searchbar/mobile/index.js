import React from 'react'
import { useWindowSize } from '../../../hooks'
import { SearchbarComponents as Searchbar } from '../components'
import { SearchIcon, FilterIcon } from '../../../assets/icons'
import { MobileSearchButton } from '../../buttons'
import { Wrapper } from '../components/searchbar/style'
import { ButtonGroup } from './style'

function MobileSearchbar({ handleChange }) {
  const { width } = useWindowSize()
  const isSmallScreen = width < 500

  return (
    <React.Fragment>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input name="search" onChange={handleChange} placeholder=" " />
          <Wrapper>
            <Searchbar.Label>
              {isSmallScreen ? 'Filter by title...' : 'Filter by title, companies, expertise...'}
            </Searchbar.Label>
            <ButtonGroup>
              <FilterIcon
                style={{ cursor: 'pointer', marginRight: '2.4rem' }}
                width={20}
                height={20}
                fill="#6E8098"
              />
              <MobileSearchButton>
                <SearchIcon width={24} height={24} fill="#fff" />
              </MobileSearchButton>
            </ButtonGroup>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </React.Fragment>
  )
}

export default MobileSearchbar
