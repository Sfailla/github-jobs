import React from 'react';
import {
  Label,
  Checkbox,
  Container,
  Group,
  Wrapper,
  SearchWrapper,
  LocationWrapper,
  FilteredInput,
  CollapsibleGroup,
} from './searchStyles';

import checkmark from '../../assets/desktop/icon-check.svg';
import location from '../../assets/desktop/icon-location.svg';
import search from '../../assets/desktop/icon-search.svg';

import Icon from '../icon';
import { SearchbarButton } from '../button';
import { MobileControlButtons } from './searchModal';
import useWindowSize from '../../hooks/useWindowSize';

export default function Searchbar() {
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
          <Checkbox type="checkbox" svg={checkmark} />
          <Label bold>{width > 800 ? 'Full Time Only' : 'Full Time'}</Label>
        </Wrapper>
        <SearchbarButton>Search</SearchbarButton>
      </CollapsibleGroup>
    </Container>
  );
}
