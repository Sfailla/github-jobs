import React from 'react';
import Icon from '../icon';
import Button from '../button';

import {
  Container,
  InputGroup,
  InputWrapper,
  LabelWrapper,
  Label,
  Input,
  FilteredInput,
} from './searchStyles';

import checkmark from '../../assets/desktop/icon-check.svg';
import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';

export default function Searchbar() {
  return (
    <Container>
      <InputWrapper>
        <InputGroup>
          <LabelWrapper>
            <Icon src={search} alt="search-icon" />
            <FilteredInput id="job-input" placeholder=" " />
            <Label htmlFor="job-input" text>
              Filter by title, company, expertise
            </Label>
          </LabelWrapper>
        </InputGroup>
        <InputGroup>
          <LabelWrapper>
            <Icon src={location} alt="location-icon" pad />
            <FilteredInput id="location-input" placeholder=" " />
            <Label htmlFor="location-input" text>
              Filter by location
            </Label>
          </LabelWrapper>
        </InputGroup>
        <InputGroup>
          <LabelWrapper>
            <Input type="checkbox" svg={checkmark} checkbox />
            <Label bold>Full Time Only</Label>
            <Button inputBtn>Search</Button>
          </LabelWrapper>
        </InputGroup>
      </InputWrapper>
    </Container>
  );
}
