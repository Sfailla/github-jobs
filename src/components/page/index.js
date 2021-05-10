import React from 'react'
import { Container } from './style'
import { LayoutWrapper } from '../../styles/shared'

function Page({ path, component: Component, ...restProps }) {
  return window.location.pathname === path ? (
    <Container>
      <LayoutWrapper>
        <Component {...restProps} />
      </LayoutWrapper>
    </Container>
  ) : null
}

export default Page
