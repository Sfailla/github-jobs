import React from 'react'
import { formatToUrl } from '../../../utils/helperFns'
import { Container, TextContainer, Title, Paragraph, TextLink } from './style'

const ApplySection = ({ data }) => {
  return (
    <Container>
      <TextContainer>
        <Title>How to apply</Title>
        <Paragraph>
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper
          laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus.
          Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
        </Paragraph>
        <TextLink>{`https://${formatToUrl(data.company.display_name)}/apply-here`}</TextLink>
      </TextContainer>
    </Container>
  )
}

export default ApplySection
