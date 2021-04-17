import React from 'react'
import { Container, Label, Input } from './fieldStyles'

export default function InputGroup({ children }) {
  return <Container>{children}</Container>
}

function SearchLabel({ children, ...props }) {
  return <Label {...props}>{children}</Label>
}

function SearchInput({ ...props }) {
  return <Input {...props} />
}

InputGroup.Label = SearchLabel
InputGroup.Input = SearchInput
