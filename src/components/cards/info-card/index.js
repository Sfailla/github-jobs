import React from 'react'
import { StyledInfoCard, Title, Label, Span, Logo } from './style'
import defaultLogo from '../../../assets/company-logo.svg'
import {
  formatTime,
  truncateWord,
  handleNullLogo,
  randomColor
} from '../../../utils/helperFns'

export default function InfoCard({ data }) {
  const { company, company_logo, title, created_at, location, type } = data

  return (
    <StyledInfoCard>
      <InfoCard.Logo
        color={randomColor()}
        src={`${handleNullLogo(company_logo, defaultLogo)}`}
      />
      <InfoCard.Heading>{`${formatTime(created_at)} - ${type}`}</InfoCard.Heading>
      <InfoCard.Title>{truncateWord(title)}</InfoCard.Title>
      <InfoCard.Subtitle>{company}</InfoCard.Subtitle>
      <InfoCard.Small>{location}</InfoCard.Small>
    </StyledInfoCard>
  )
}

function InfoCardTitle({ children }) {
  return <Title>{children}</Title>
}

function InfoCardSubtitle({ children }) {
  return <Label>{children}</Label>
}

function InfoCardHeading({ children }) {
  return <Label>{children}</Label>
}

function InfoCardSmall({ children }) {
  return <Span>{children}</Span>
}

function InfoCardLogo({ ...props }) {
  return <Logo {...props} />
}

InfoCard.Title = InfoCardTitle
InfoCard.Subtitle = InfoCardSubtitle
InfoCard.Heading = InfoCardHeading
InfoCard.Small = InfoCardSmall
InfoCard.Logo = InfoCardLogo
