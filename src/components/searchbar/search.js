import React from 'react';
import { Container, InputGroup, Wrapper, Label, Input } from './searchStyles';

export default function Searchbar() {
  return (
    <Container>
      <Wrapper>
        <InputGroup>
          <Input />
        </InputGroup>
        <InputGroup>
          <Input />
        </InputGroup>
        <InputGroup>
          <Input />
          <Label>Full Time Only</Label>
          <span>button</span>
        </InputGroup>
      </Wrapper>
    </Container>
  );
}
