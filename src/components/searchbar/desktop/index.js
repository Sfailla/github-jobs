import React from 'react'
import Searchbar from '..'
import { SearchIcon, LocationIcon } from '../../../assets/icons'
import { Wrapper, SvgWrapper } from './style'
import { SearchbarButton as Button } from '../../buttons'
import { useWindowSize } from '../../../hooks'

export default function SearchbarContainer() {
  const [checked, setChecked] = React.useState(false)
  const { width } = useWindowSize()
  const isSmallScreen = width < 992

  const handleCheck = () => setChecked(checked => !checked)

  return (
    <Searchbar>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input placeholder=" " />
          <Wrapper>
            <SearchIcon />
            <Searchbar.Label>
              {isSmallScreen
                ? 'Filter by title...'
                : 'Filter by title, companies, expertise...'}
            </Searchbar.Label>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>

      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input placeholder=" " />
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
            <Searchbar.Checkbox onChange={handleCheck} checked={checked} />
            <Searchbar.Label bold>Full time only</Searchbar.Label>
            <Button style={{ marginLeft: '1rem' }}>Search</Button>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </Searchbar>
  )
}
