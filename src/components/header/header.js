import React from 'react';
import { Background, Container, Logo } from './headerStyles';
import Searchbar from '../searchbar/search';

import { LayoutWrapper } from '../../styles/shared';
import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';

function Header() {
  return (
    <Background src={background}>
      <LayoutWrapper>
        <Container>
          <Logo src={logo} alt="logo" />
          <h1 style={{ color: 'white' }}>toggle</h1>
        </Container>
        <Searchbar />
      </LayoutWrapper>
    </Background>
  );
}

export default Header;
