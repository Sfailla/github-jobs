import React from 'react'
import { randomColor, formatToUrl } from '../../../utils/helperFns'
import { ReactComponent as CompanyLogo } from '../../../assets/company-logo.svg'
import { InfoButton } from '../../buttons'
import {
  Container,
  LogoContainer,
  ContentContainer,
  TextContainer,
  ButtonContainer,
  Title,
  Subtitle
} from './style'

const TitleBar = ({ data }) => {
  return (
    <Container>
      <LogoContainer $color={randomColor()}>
        <CompanyLogo width={55} height={55} fill="#fff" />
      </LogoContainer>
      <ContentContainer>
        <TextContainer>
          <Title>{data.company.display_name}</Title>
          <Subtitle>{formatToUrl(data.company.display_name)}</Subtitle>
        </TextContainer>
        <ButtonContainer>
          <InfoButton>Company Site</InfoButton>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  )
}

export default TitleBar
