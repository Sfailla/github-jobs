import React from 'react';
import { Container } from './buttonStyles';

export default function Button({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}
