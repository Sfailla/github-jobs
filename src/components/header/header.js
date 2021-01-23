import React from 'react';
import { Head, Container, Logo, Toggle } from './headerStyles';

export default function Header({ src, children, ...otherProps }) {
  return (
    <Head src={src} {...otherProps}>
      {children}
    </Head>
  );
}

Header.Container = function HeaderContainer({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ ...otherProps }) {
  return <Logo {...otherProps} />;
};

Header.Toggle = function HeaderToggle({ children }) {
  return <Toggle>{children}</Toggle>;
};
