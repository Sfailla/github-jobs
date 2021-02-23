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
import { MobileControlButtons } from './searchModal';
import { SearchbarButton } from '../button';

import useWindowSize from '../../hooks/useWindowSize';
import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';
import checkmark from '../../assets/desktop/icon-check.svg';

export default function Searchbar({ checked, onChange }) {
  const { width } = useWindowSize();
  const isSmallScreen = width < 500 || (width > 680 && width < 1080);

  return (
    <Container>
      <Group>
        <FilteredInput id="job-input" placeholder=" " />
        <SearchWrapper>
          {width > 680 && <Icon src={search} alt="search-icon" />}
          <Label htmlFor="job-input" text>
            {isSmallScreen
              ? 'Filter by title...'
              : 'Filter by title, company, expertise...'}
          </Label>
          {width < 680 && <MobileControlButtons />}
        </SearchWrapper>
      </Group>
      <CollapsibleGroup>
        <FilteredInput id="location-input" placeholder=" " />
        <LocationWrapper>
          <Icon src={location} alt="location-icon" />
          <Label htmlFor="location-input" text>
            Filter by location...
          </Label>
        </LocationWrapper>
      </CollapsibleGroup>
      <CollapsibleGroup justify>
        <Wrapper>
          <Checkbox
            checked={checked}
            onChange={onChange}
            name="checked"
            type="checkbox"
            svg={checkmark}
          />
          <Label bold>{width > 800 ? 'Full Time Only' : 'Full Time'}</Label>
        </Wrapper>
        <SearchbarButton onClick={() => console.log('filtered click')}>
          Search
        </SearchbarButton>
      </CollapsibleGroup>
    </Container>
  );
}
