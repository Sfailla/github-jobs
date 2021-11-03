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
        <InfoCardLogo $color={randomColor()} />
        <Label>{`${formatTime(created)} - ${data.category.label}`}</Label>
        <Title>{truncateWord(title)}</Title>
        <Label>{display_name}</Label>
        <Span>{data.location.display_name}</Span>
      </CardInfoButton>
    </StyledInfoCard>
  )
}

function InfoCardLogo({ ...props }) {
  return (
    <Logo {...props}>
      <CompanyLogo width={40} height={40} />
    </Logo>
  )
}

export default React.memo(InfoCard)
