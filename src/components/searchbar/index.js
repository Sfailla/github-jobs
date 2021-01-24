import React from 'react';
import { LayoutWrapper } from '../../styles/shared';
import Searchbar from './search';

export default function SearchbarContainer() {
  return (
    <Searchbar>
      <Searchbar.InputWrapper>
        <Searchbar.InputGroup>
          <Searchbar.Input />
        </Searchbar.InputGroup>
        <Searchbar.InputGroup>
          <Searchbar.Input />
        </Searchbar.InputGroup>
        <Searchbar.InputGroup>
          <Searchbar.Input />
          <Searchbar.Label>Full Time Only</Searchbar.Label>
          <span>button</span>
        </Searchbar.InputGroup>
      </Searchbar.InputWrapper>
    </Searchbar>
  );
}
