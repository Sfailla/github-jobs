import React from 'react';
import Header from './header';
import { LayoutWrapper } from '../../styles/shared';

import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';

function HeaderSection({ children }) {
  return (
    <Header src={background}>
      <LayoutWrapper relative>
        <Header.Container>
          <Header.Logo src={logo} alt="logo-svg" />
          <h1 style={{ color: 'white' }}>toggle</h1>
        </Header.Container>
        {children}
      </LayoutWrapper>
    </Header>
  );
}

export default HeaderSection;
