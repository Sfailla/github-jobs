import React from 'react';
import { Background, Container, Logo } from './headerStyles';

function Header({ src, children }) {
  return <Background src={src}>{children}</Background>;
}

Header.Container = function HeaderContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...otherProps }) {
  return <Logo {...otherProps}>{children}</Logo>;
};

export default Header;
