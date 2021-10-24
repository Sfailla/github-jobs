import React from 'react'

import { formatTime } from '../../../utils/helperFns'
import { ApplyButton } from '../../buttons'
import {
  Divider,
  Container,
  DetailsHeader,
  DetailsContent,
  ButtonContainer,
  Heading,
  Title,
  Subtitle,
  Paragraph
} from './style'

const ApplicationDetails = ({ data }) => {
  return (
    <Container>
      <DetailsHeader>
        <Divider>
          <Heading>{`${formatTime(data.created)} - ${data.category.label}`}</Heading>
          <Title>{data.title}</Title>
          <Subtitle>{data.location.display_name}</Subtitle>
        </Divider>
        <Divider>
          <ButtonContainer>
            <ApplyButton>Apply</ApplyButton>
          </ButtonContainer>
        </Divider>
      </DetailsHeader>
      <DetailsContent>
        <Paragraph>{data.description}</Paragraph>
      </DetailsContent>
    </Container>
  )
}

export default ApplicationDetails
