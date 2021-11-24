import 'styled-components/macro'
import React from 'react'
import { useWindowSize } from '../../../../hooks'
import { SearchbarComponents as Searchbar } from '..'
import { SearchIcon, FilterIcon } from '../../../../assets/icons'
import { SearchIconButton, TransparentButton } from '../../../buttons'
import { Wrapper } from '../searchbar/style'
import { ButtonGroup } from './style'

function MobileSearchbar({ values, handleChange, handleOpenModal }) {
  const { width } = useWindowSize()
  const isSmallScreen = width < 500

  return (
    <React.Fragment>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input
            id="search"
            name="search"
            value={values.search}
            onChange={handleChange}
            placeholder=" "
          />
          <Wrapper>
            <Searchbar.Label htmlFor="search">
              {isSmallScreen ? 'Filter by title...' : 'Filter by title, companies, expertise...'}
            </Searchbar.Label>
            <ButtonGroup>
              <TransparentButton onClick={handleOpenModal} type="button">
                <FilterIcon css={{ cursor: 'pointer' }} width={20} height={20} fill="#6E8098" />
              </TransparentButton>
              <SearchIconButton type="submit">
                <SearchIcon width={24} height={24} fill="#fff" />
              </SearchIconButton>
            </ButtonGroup>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </React.Fragment>
  )
}

export default MobileSearchbar
