import React from 'react';
import Header from './header';
import { LayoutWrapper } from '../../styles/shared';

import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';

function HeaderComponent() {
  return (
    <Header src={background}>
      <LayoutWrapper>
        <Header.Container>
          <Header.Logo src={logo} alt="logo-svg" />
          <Header.Toggle>
            <h1>toggle</h1>
          </Header.Toggle>
        </Header.Container>
      </LayoutWrapper>
    </Header>
  );
}

export default HeaderComponent;
