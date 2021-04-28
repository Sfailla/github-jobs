import React from 'react'
import { Container, Label, BoldLabel, Input, Checkbox } from './fieldStyles'

export default function InputGroup({ children }) {
  return <Container>{children}</Container>
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

InputGroup.Label = SearchLabel
InputGroup.Input = SearchInput
InputGroup.Checkbox = SearchCheckbox
