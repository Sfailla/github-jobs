import React from 'react';
import { Container, InputGroup, InputWrapper, Label, Input } from './searchStyles';

export default function Searchbar({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Searchbar.InputGroup = function SearchbarInputGroup({ children, ...otherProps }) {
  return <InputGroup {...otherProps}>{children}</InputGroup>;
};
Searchbar.InputWrapper = function SearchbarInputWrapper({
  children,
  ...otherProps
}) {
  return <InputWrapper {...otherProps}>{children}</InputWrapper>;
};
Searchbar.Label = function SearchbarLabel({ children, ...otherProps }) {
  return <Label {...otherProps}>{children}</Label>;
};
Searchbar.Input = function SearchbarInput({ children, ...otherProps }) {
  return <Input {...otherProps}>{children}</Input>;
};
