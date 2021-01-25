import React from 'react';
import {
  Container,
  InputGroup,
  InputWrapper,
  LabelWrapper,
  Label,
  Input,
  JobInput,
  LocationInput,
} from './searchStyles';

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

Searchbar.LabelWrapper = function SearchbarLabelWrapper({
  children,
  ...otherProps
}) {
  return <LabelWrapper {...otherProps}>{children}</LabelWrapper>;
};

Searchbar.Label = function SearchbarLabel({ children, ...otherProps }) {
  return <Label {...otherProps}>{children}</Label>;
};

Searchbar.Input = function SearchbarInput({ children, ...otherProps }) {
  return <Input {...otherProps}>{children}</Input>;
};

Searchbar.JobInput = function SearchbarJobInput({ children, ...otherProps }) {
  return <JobInput {...otherProps}>{children}</JobInput>;
};

Searchbar.LocationInput = function SearchbarLocationInput({
  children,
  ...otherProps
}) {
  return <LocationInput {...otherProps}>{children}</LocationInput>;
};
