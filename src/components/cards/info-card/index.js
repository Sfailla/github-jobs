import React from 'react'
import { StyledInfoCard, Title, Label, Span } from './style'
import { formatTime, truncateWord } from '../../../utils/helperFns'

export default function InfoCard({ data }) {
  const { company, title, created_at, location, type } = data

  return (
    <StyledInfoCard>
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

InfoCard.Title = InfoCardTitle
InfoCard.Subtitle = InfoCardSubtitle
InfoCard.Heading = InfoCardHeading
InfoCard.Small = InfoCardSmall
