import React from 'react'
import Searchbar from './searchbar'
import { SearchIcon, LocationIcon } from '../../icons'
import { Wrapper, SvgWrapper } from './searchStyles'
import { SearchbarButton as Button } from '../button'
import { useWindowSize } from '../../hooks'

const SearchbarContainer = () => {
  const [checked, setChecked] = React.useState(false)
  const handleCheck = () => setChecked(checked => !checked)
  const { width } = useWindowSize()
  const shortenText = width < 992

  return (
    <Searchbar>
      <Searchbar.Section>
        <Searchbar.InputGroup>
          <Searchbar.Input placeholder=" " />
          <Wrapper>
            <SearchIcon />
            <Searchbar.Label>
              {shortenText
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
            <Searchbar.Label style={{ marginRight: 'auto' }} bold>
              Find a job
            </Searchbar.Label>
            <Button>Click Me</Button>
          </Wrapper>
        </Searchbar.InputGroup>
      </Searchbar.Section>
    </Searchbar>
  )
}

export default SearchbarContainer
