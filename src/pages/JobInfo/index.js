import React from 'react'
import { TitleBar, ApplicationDetails, ApplySection } from '../../components/job-details'
import Footer from '../../components/footer'
import { LayoutWrapper } from '../../styles/shared'
import { Container, ReverseMarginLayout } from './style'

function JobInfo(props) {
  const jobDetails = props.location.state

  console.log(jobDetails)

  return (
    <Container>
      <LayoutWrapper>
        <ReverseMarginLayout>
          <TitleBar data={jobDetails} />
          <ApplicationDetails data={jobDetails} />
          <ApplySection data={jobDetails} />
        </ReverseMarginLayout>
      </LayoutWrapper>
      <Footer data={jobDetails} />
    </Container>
  )
}

export default JobInfo
