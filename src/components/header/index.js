import React from 'react';

import Header from './header';
import Searchbar from '../searchbar';
import { LayoutWrapper } from '../../styles/shared';
import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';

function HeaderSection() {
  return (
    <Header src={background}>
      <LayoutWrapper>
        <Header.Container>
          <Header.Logo src={logo} alt="logo-svg" />
          <h1 style={{ color: 'white' }}>toggle</h1>
        </Header.Container>
      </LayoutWrapper>
      <Searchbar />
    </Header>
  );
}

export default HeaderSection;
