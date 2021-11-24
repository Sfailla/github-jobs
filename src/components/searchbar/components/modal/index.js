import React from 'react'
import ReactDOM from 'react-dom'
import {
  OuterContainer,
  Container,
  Header,
  LocationInput,
  InputContainer,
  InputContentWrapper,
  Content,
  Label,
  Wrapper,
  Checkbox
} from './style'
import { SearchbarButton } from '../../../buttons'
import { LocationIcon } from '../../../../assets/icons'

function SearchbarModal({ open, values, handleChange, handleSubmit, handleCheck, checked }) {
  if (!open) return null

  return ReactDOM.createPortal(
    <OuterContainer>
      <Container onSubmit={handleSubmit}>
        <Header>
          <InputContainer>
            <LocationInput
              autoComplete="off"
              id="location"
              name="location"
              value={values.location}
              onChange={handleChange}
              placeholder=" "
            />
            <InputContentWrapper>
              <LocationIcon width={17} height={24} fill="#5964E0" />
              <Label htmlFor="location">Filter by location...</Label>
            </InputContentWrapper>
          </InputContainer>
        </Header>
        <Content>
          <Wrapper>
            <Checkbox
              type="checkbox"
              id="full-time"
              name="full-time"
              onChange={handleCheck}
              checked={checked}
            />
            <Label htmlFor="full-time" bold>
              Full time only
            </Label>
          </Wrapper>
          <SearchbarButton type="submit">Search</SearchbarButton>
        </Content>
      </Container>
    </OuterContainer>,
    document.body
  )
}

export default SearchbarModal
