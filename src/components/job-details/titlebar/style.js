import styled from 'styled-components/macro'
import { flex } from '../../../styles/mixins'
import { media, DesignSystem } from '../../../styles/shared'

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

  ${media.sm`
    height: 20.5rem;
    overflow: visible;
    ${flex('center', 'center', 'column')};
  `}
`

export const LogoContainer = styled.div`
  width: 14rem;
  height: 14rem;
  min-width: 14rem;
  ${flex()}
  background-color: ${({ $color }) => $color};

  ${media.sm`
    width: 6rem;
    height: 7rem;
    min-width: unset;
    margin-top: -3rem;
  `}
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 40px;
  ${flex('space-between', 'center')};

  ${media.sm`
    height: 100%;
    padding-top: 0;
    padding-bottom: 3.2rem;
    flex-direction: column;
  `}
`
export const TextContainer = styled.div``

export const ButtonContainer = styled.div``

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text.normal};
  padding: 1.5rem 0 0.5rem 0;

  ${media.sm`
    padding: 3.1rem 0 1rem 0;
  `}
`

export const Subtitle = styled.h4`
  font-size: 1.4rem;
  color: ${color.secondary.darkgrey};

  ${media.sm`
    text-align: center;
  `}
`
