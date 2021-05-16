import styled from 'styled-components/macro'
import { StyledCard } from '../card/style'
import { flex } from '../../../styles/mixins'
import { DesignSystem, media } from '../../../styles/shared'

const { color } = DesignSystem

export const StyledInfoCard = styled(StyledCard)`
  max-width: 35rem;
  height: 22.8rem;
  position: relative;

  ${media.lg`
    width: 100%; 
    max-width: unset;
  `};
`

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flex('flex-start', 'center', 'column')};
`

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${color.secondary.darkgrey};
`

export const Title = styled.h2`
  padding-top: 3px;
  font-size: 2rem;
  color: ${({ theme }) => theme.text.normal};
`

export const Span = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${color.primary.deepblue};
`

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  border-radius: 1.5rem;
  position: absolute;
  top: -2.5rem;
  left: 3.2rem;
  background-color: ${({ color }) => color};
`
