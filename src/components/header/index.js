import React from 'react';
import Header from './header';
import { LayoutWrapper } from '../../styles/shared';

import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';
import ToggleSwitch from '../toggle';

function HeaderSection({ children }) {
  return (
    <Header src={background}>
      <LayoutWrapper relative>
        <Header.Container>
          <Header.Logo src={logo} alt="logo-svg" />
          <ToggleSwitch />
        </Header.Container>
        {children}
      </LayoutWrapper>
    </Header>
  );
}

export default HeaderSection;
