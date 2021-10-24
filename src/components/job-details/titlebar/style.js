import styled from 'styled-components/macro'
import { flex } from '../../../styles/mixins'
import { DesignSystem } from '../../../styles/shared'

const { color } = DesignSystem

export const Container = styled.div`
  width: 100%;
  height: 14rem;
  max-width: 73rem;
  margin: 0 auto 3.2rem auto;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.secondary};
  display: flex;
`

export const LogoContainer = styled.div`
  width: 14rem;
  height: 14rem;
  min-width: 14rem;
  ${flex()}
  background-color: ${({ $color }) => $color};
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 40px;
  ${flex('space-between', 'center')};
`
export const TextContainer = styled.div``

export const ButtonContainer = styled.div``

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text.normal};
  padding: 1.5rem 0 0.5rem 0;
`

export const Subtitle = styled.h4`
  font-size: 1.4rem;
  color: ${color.secondary.darkgrey};
`
