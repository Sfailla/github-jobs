import React from 'react';
import {
  Label,
  Container,
  Group,
  SearchWrapper,
  FilteredInput,
  CollapsibleGroup,
  LocationWrapper,
  Wrapper,
  Checkbox,
} from './searchStyles';

import Icon from '../icon';
import { MobileFilterButtons } from './searchModal';
import { SearchbarButton } from '../button';
import useWindowSize from '../../hooks/useWindowSize';

import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';
import checkmark from '../../assets/desktop/icon-check.svg';
import { ThemeContext } from '../app/context';

export default function Searchbar({ checked, onChange }) {
  const { width } = useWindowSize();
  const { setShowModal } = React.useContext(ThemeContext);
  const isSmallScreen = width < 500 || (width >= 680 && width < 1080);
  const isLargeScreen = width > 679;

  return (
    <Container>
      <Group>
        <FilteredInput id="job-input" placeholder=" " />
        <SearchWrapper>
          {isLargeScreen && <Icon src={search} alt="search-icon" />}
          <Label htmlFor="job-input" text>
            {isSmallScreen
              ? 'Filter by title...'
              : 'Filter by title, company, expertise...'}
          </Label>
          {!isLargeScreen && <MobileFilterButtons setShowModal={setShowModal} />}
        </SearchWrapper>
      </Group>
      {isLargeScreen && (
        <React.Fragment>
          <CollapsibleGroup>
            <FilteredInput id="location-input" placeholder=" " />
            <LocationWrapper>
              <Icon src={location} alt="location-icon" />
              <Label htmlFor="location-input" text>
                Filter by location...
              </Label>
            </LocationWrapper>
          </CollapsibleGroup>
          <CollapsibleGroup>
            <Wrapper>
              <Checkbox
                checked={checked}
                onChange={onChange}
                name="checked"
                type="checkbox"
                svg={checkmark}
              />
              <Label bold>{width > 1150 ? 'Full Time Only' : 'Full Time'}</Label>
            </Wrapper>
            <SearchbarButton onClick={() => console.log('filtered click')}>
              Search
            </SearchbarButton>
          </CollapsibleGroup>
        </React.Fragment>
      )}
    </Container>
  );
}
