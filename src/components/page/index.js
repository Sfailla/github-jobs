import React from 'react';
import { Container } from './pageStyles';

function Page({ path, component: Component, ...restProps }) {
  return window.location.pathname === path ? (
    <Container>
      <Component {...restProps} />
    </Container>
  ) : null;
}

export default Page;
