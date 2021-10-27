import styled from 'styled-components/macro'
import { flex } from '../../styles/mixins'
import { DesignSystem } from '../../styles/shared'

const { color } = DesignSystem

export const Container = styled.div`
  width: 100%;
  height: 9.6rem;
  margin-top: 7.25rem;
  padding: 20px;
  ${flex()};
  background-color: ${({ theme }) => theme.background.secondary};
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;
  ${flex('space-between', 'center')};
`
export const TextContainer = styled.div``

export const ButtonContainer = styled.div``

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text.normal};
  padding: 1.5rem 0 0.5rem 0;
  line-height: 1.2;
`

export const Subtitle = styled.h4`
  font-size: 1.4rem;
  color: ${color.secondary.darkgrey};
`
