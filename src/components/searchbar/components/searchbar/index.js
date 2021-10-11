import React from 'react'
import { Container, InputContainer, Form, Label, BoldLabel, Input, Checkbox } from './style'

function Searchbar({ children, ...props }) {
  return (
    <Form {...props}>
      <Container>{children}</Container>
    </Form>
  )
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

export default Searchbar
