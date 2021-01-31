import React from 'react';
import Icon from '../icon';
import { SearchbarButton } from '../button';

import {
  Container,
  InputGroup,
  InputWrapper,
  LabelWrapper,
  Label,
  Checkbox,
  FilteredInput,
} from './searchStyles';

import checkmark from '../../assets/desktop/icon-check.svg';
import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';

import useWindowSize from '../../hooks/useWindowSize';

export default function LargeSearchbar() {
  const { width } = useWindowSize();

  return (
    <Container>
      <InputWrapper>
        <InputGroup>
          <FilteredInput id="job-input" placeholder=" " />
          <LabelWrapper>
            <Icon src={search} alt="search-icon" />
            <Label htmlFor="job-input" text>
              {width > 1080
                ? 'Filter by title, company, expertise...'
                : 'Filter by title...'}
            </Label>
          </LabelWrapper>
        </InputGroup>
        <InputGroup>
          <FilteredInput id="location-input" placeholder=" " />
          <LabelWrapper>
            <Icon src={location} alt="location-icon" pad />
            <Label htmlFor="location-input" text>
              Filter by location...
            </Label>
          </LabelWrapper>
        </InputGroup>
        <InputGroup>
          <LabelWrapper>
            <Checkbox type="checkbox" svg={checkmark} />
            <Label bold>{width > 1080 ? 'Full Time Only' : 'Full Time'}</Label>
            <SearchbarButton>Search</SearchbarButton>
          </LabelWrapper>
        </InputGroup>
      </InputWrapper>
    </Container>
  );
}
