import React from 'react'
import {
  Container,
  InputContainer,
  Label,
  BoldLabel,
  Input,
  Checkbox
} from './desktop/style'

export default function Searchbar({ children }) {
  return <Container>{children}</Container>
}

function SearchbarSection({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}

function SearchbarInputGroup({ children }) {
  return <InputContainer>{children}</InputContainer>
}

function SearchLabel({ bold = false, children, ...props }) {
  let Component = bold ? BoldLabel : Label
  return <Component {...props}>{children}</Component>
}

function SearchInput({ ...props }) {
  return <Input {...props} />
}

function SearchCheckbox({ ...props }) {
  return <Checkbox type="checkbox" {...props} />
}

Searchbar.Section = SearchbarSection
Searchbar.InputGroup = SearchbarInputGroup
Searchbar.Label = SearchLabel
Searchbar.Input = SearchInput
Searchbar.Checkbox = SearchCheckbox
