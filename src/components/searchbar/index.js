import React from 'react';
import Searchbar from './search';
import checkmark from '../../assets/desktop/icon-check.svg';
import search from '../../assets/desktop/icon-search.svg';
import location from '../../assets/desktop/icon-location.svg';
import Icon from '../icon/icon';

export default function SearchbarContainer() {
  return (
    <Searchbar>
      <Searchbar.InputWrapper>
        <Searchbar.InputGroup>
          <Searchbar.JobInput placeholder="" />
          <Searchbar.LabelWrapper>
            <Icon src={search} alt="search-icon" />
            <Searchbar.Label>
              Filter by title, companies, expertise...
            </Searchbar.Label>
          </Searchbar.LabelWrapper>
        </Searchbar.InputGroup>
        <Searchbar.InputGroup>
          <Searchbar.LocationInput placeholder="" />
          <Searchbar.LabelWrapper>
            <Icon src={location} alt="location-icon" />
            <Searchbar.Label>Filter by location...</Searchbar.Label>
          </Searchbar.LabelWrapper>
        </Searchbar.InputGroup>
        <Searchbar.InputGroup>
          <Searchbar.Input type="checkbox" svg={checkmark} checkbox />
          <Searchbar.Label>Full Time Only</Searchbar.Label>
          <span>button</span>
        </Searchbar.InputGroup>
      </Searchbar.InputWrapper>
    </Searchbar>
  );
}
