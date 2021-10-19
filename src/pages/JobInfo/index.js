import React from 'react'

import { formatTime, truncateWord } from '../../utils/helperFns'
import { LayoutWrapper } from '../../styles/shared'
import { ApplyButton } from '../../components/buttons'
import {
  Container,
  Divider,
  DetailsContainer,
  DetailsHeader,
  DetailsContent,
  ButtonContainer,
  Heading,
  Title,
  Subtitle,
  Paragraph
} from './style'

function JobInfo(props) {
  const [jobDetails, setJobDetails] = React.useState(props.location.state)

  console.log(jobDetails)

  return (
    <Container>
      <LayoutWrapper>
        <DetailsContainer>
          <DetailsHeader>
            <Divider>
              <Heading>{`${formatTime(jobDetails.created)} - ${
                jobDetails.category.label
              }`}</Heading>
              <Title>{jobDetails.title}</Title>
              <Subtitle>{jobDetails.location.display_name}</Subtitle>
            </Divider>
            <Divider>
              <ButtonContainer>
                <ApplyButton>Apply</ApplyButton>
              </ButtonContainer>
            </Divider>
          </DetailsHeader>

          <DetailsContent>
            <Paragraph>{jobDetails.description}</Paragraph>
          </DetailsContent>
        </DetailsContainer>
      </LayoutWrapper>
    </Container>
  )
}

export default JobInfo
