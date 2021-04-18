import styled from 'styled-components/macro'
import { media, headerHeight } from '../../styles/shared'
import { flex } from '../../styles/mixins'

export const Background = styled.header`
  width: 100%;
  height: ${headerHeight};
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  padding: 0 4rem;
  background-color: ${({ theme }) => theme.background.primary};

  ${media.mobile`height: 13.2rem; padding: 0 2.4rem;`};
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 4.4rem;
  ${flex('space-between', 'center')};

  ${media.mobile`padding-top: 3.2rem;`};
`
