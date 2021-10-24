import React from 'react'
import { formatToUrl } from '../../utils/helperFns'

import { ApplyButton } from '../buttons'
import {
  Container,
  ContentContainer,
  TextContainer,
  ButtonContainer,
  Title,
  Subtitle
} from './style'

const Footer = ({ data }) => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Title>{data.title}</Title>
          <Subtitle>{formatToUrl(data.company.display_name)}</Subtitle>
        </TextContainer>
        <ButtonContainer>
          <ApplyButton>Company Site</ApplyButton>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  )
}

export default Footer
