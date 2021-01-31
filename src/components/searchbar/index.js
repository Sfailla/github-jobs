import React from 'react';
import Icon from '../icon';
import { SearchbarButton } from '../button';

import {
  Label,
  Checkbox,
  Container,
  InputGroup,
  InputWrapper,
  LabelWrapper,
  FilteredInput,
  CollapsibleInputGroup,
} from './searchStyles';

import checkmark from '../../assets/desktop/icon-check.svg';
import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';

import useWindowSize from '../../hooks/useWindowSize';

export default function Searchbar() {
  const { width } = useWindowSize();
  const isSmallScreen = width < 600 || (width > 600 && width < 1080);

  return (
    <Container>
      <InputWrapper>
        <InputGroup>
          <FilteredInput id="job-input" placeholder=" " />
          <LabelWrapper>
            <Icon src={search} alt="search-icon" />
            <Label htmlFor="job-input" text>
              {isSmallScreen
                ? 'Filter by title...'
                : 'Filter by title, company, expertise...'}
            </Label>
          </LabelWrapper>
        </InputGroup>
        <CollapsibleInputGroup>
          <FilteredInput id="location-input" placeholder=" " />
          <LabelWrapper>
            <Icon src={location} alt="location-icon" pad={true} />
            <Label htmlFor="location-input" text>
              Filter by location...
            </Label>
          </LabelWrapper>
        </CollapsibleInputGroup>
        <CollapsibleInputGroup changeFlex>
          <LabelWrapper>
            <Checkbox type="checkbox" svg={checkmark} />
            <Label bold>{width > 800 ? 'Full Time Only' : 'Full Time'}</Label>
          </LabelWrapper>
          <SearchbarButton>Search</SearchbarButton>
        </CollapsibleInputGroup>
      </InputWrapper>
    </Container>
  );
}
