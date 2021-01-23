import React from 'react';
import { Header, Container, Logo, Toggle } from './headerStyles';

import logo from '../../assets/desktop/logo.svg';
import background from '../../assets/desktop/bg-pattern-header.svg';

function header() {
  return (
    <Header src={background}>
      <Container>
        <Logo src={logo} alt="logo-svg" />
        <Toggle />
      </Container>
    </Header>
  );
}

// function HeaderLogo({ ...otherProps }) {
//   return <Logo {...otherProps} />;
// }

export default header;
