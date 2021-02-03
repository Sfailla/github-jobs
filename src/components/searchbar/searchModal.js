import React from 'react';
import styled from 'styled-components/macro';
import {
  CollapsibleGroup,
  FilteredInput,
  LocationWrapper,
  Wrapper,
  Label,
  Checkbox,
} from '../searchbar/searchStyles';
import { IconButton, MobileSearchButton, SearchbarButton } from '../button';
import Icon from '../icon';
import { media } from '../../styles/shared';

import search_white from '../../assets/desktop/icon-white-search.svg';
import filter from '../../assets/mobile/icon-filter.svg';
import checkmark from '../../assets/desktop/icon-check.svg';
import location from '../../assets/desktop/icon-location.svg';

const MobileButtonContainer = styled.div`
  width: 9.2rem;
  height: 4.8rem;
  margin-right: 1.6rem;
  ${({ theme }) => theme.mixin.flex('space-between', 'center')};
`;

const Container = styled.div`
  width: 100%;
  max-width: 32.7rem;
  height: 21.7rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme[theme.mode].background.secondary};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 7.2rem min-content 14.4rem;

  ${({ theme }) => theme.mixin.absolutePosition()};
`;

const Divider = styled.span`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: ${({ theme }) => theme.color.secondary.darkgrey};
`;

export function MobileControlButtons() {
  return (
    <MobileButtonContainer>
      <IconButton>
        <Icon src={filter} />
      </IconButton>
      <MobileSearchButton>
        <Icon src={search_white} />
      </MobileSearchButton>
    </MobileButtonContainer>
  );
}

export function FilterSearchModal() {
  return (
    <Container>
      <CollapsibleGroup>
        <FilteredInput id="location-input" placeholder=" " />
        <LocationWrapper>
          <Icon src={location} alt="location-icon" />
          <Label htmlFor="location-input" text>
            Filter by location...
          </Label>
        </LocationWrapper>
      </CollapsibleGroup>
      <Divider />
      <CollapsibleGroup justify>
        <Wrapper>
          <Checkbox type="checkbox" svg={checkmark} />
          <Label bold>Full Time Only</Label>
        </Wrapper>
        <SearchbarButton>Search</SearchbarButton>
      </CollapsibleGroup>
    </Container>
  );
}
