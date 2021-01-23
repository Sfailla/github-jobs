import React from 'react';

import { LayoutWrapper } from '../../styles/shared';
import Header from './header';
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
    </Header>
  );
}

export default HeaderSection;
