import React from 'react'
import { StyledInfoCard, Title, Label, Span, Logo } from './style'
import { CardInfoButton } from '../../buttons'
import { ReactComponent as CompanyLogo } from '../../../assets/company-logo.svg'
import { useHistory } from 'react-router-dom'
import { formatTime, truncateWord, randomColor } from '../../../utils/helperFns'

function InfoCard({ data }) {
  const history = useHistory()
  const {
    company: { display_name },
    title,
    created
  } = data

  return (
    <StyledInfoCard>
      <CardInfoButton
        onClick={() =>
          history.push({
            pathname: '/job-info',
            state: data
          })
        }
      >
        <InfoCard.Logo $color={randomColor()} />
        <InfoCard.Heading>{`${formatTime(created)} - ${data.category.label}`}</InfoCard.Heading>
        <InfoCard.Title>{truncateWord(title)}</InfoCard.Title>
        <InfoCard.Subtitle>{display_name}</InfoCard.Subtitle>
        <InfoCard.Small>{data.location.display_name}</InfoCard.Small>
      </CardInfoButton>
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
  return (
    <Logo {...props}>
      <CompanyLogo width={40} height={40} />
    </Logo>
  )
}

InfoCard.Title = InfoCardTitle
InfoCard.Subtitle = InfoCardSubtitle
InfoCard.Heading = InfoCardHeading
InfoCard.Small = InfoCardSmall
InfoCard.Logo = InfoCardLogo

export default React.memo(InfoCard)
