import styled from 'styled-components/macro'
import { flex } from '../../../styles/mixins'
import { DesignSystem, media } from '../../../styles/shared'

const { color } = DesignSystem

export const Divider = styled.div`
  ${media.sm`
  ${flex('flex-start', 'flex-start', 'column')};
  margin-bottom: 3.1rem;
 `}
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 73rem;
  max-height: 100%;
  margin: 0 auto;
  padding: 4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background.secondary};
  ${flex('center', 'center', 'column')};
`

export const DetailsHeader = styled.div`
  width: 100%;
  height: auto;
  min-height: 8rem;
  max-width: 64rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr min-content;

  ${media.sm`
    grid-template-columns: 1fr;
    margin-bottom: 3.2rem;
  `}
`

export const DetailsContent = styled.div`
  width: 100%;
  height: auto;
`

export const Heading = styled.span`
  font-size: 1.6rem;
  color: ${color.secondary.darkgrey};
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flex('flex-end', 'center')}
`

export const Title = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.text.normal};
  padding: 1.5rem 0 0.5rem 0;
  line-height: 1.2;
`

export const Subtitle = styled.h4`
  font-size: 1.4rem;
  color: ${color.primary.deepblue};
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: ${color.secondary.darkgrey};
  line-height: 1.8;
  text-align: justify;
`
