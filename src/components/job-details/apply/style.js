import styled from 'styled-components/macro'
import { DesignSystem } from '../../../styles/shared'

const { color } = DesignSystem

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 26rem;
  max-width: 73rem;
  border-radius: 6px;
  margin: 3rem auto 0 auto;
  background-color: ${color.primary.deepblue};
`
export const TextContainer = styled.div`
  color: white;
  padding: 40px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.6;
  padding: 2rem 0 3.5rem 0;
`

export const TextLink = styled.a`
  font-size: 16px;
  font-weight: bold;
`
