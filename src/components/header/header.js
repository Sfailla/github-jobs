import React from 'react';
import { Background, Container } from './headerStyles';

function Header({ children, ...otherProps }) {
  return <Background {...otherProps}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

export default Header;
