import styled from 'styled-components/macro'
import { headerHeight, media } from '../../styles/shared'
import { flex } from '../../styles/mixins'

export const Background = styled.header`
  width: 100%;
  height: ${headerHeight};
  background: ${({ $src }) => `url(${$src})`};
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;
  padding: 0 4rem;
  background-color: ${({ theme }) => theme.background.primary};

  ${media.sm`
    padding: 0 2rem;
  `}
`

export const HeaderContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 4.4rem;
  ${flex('space-between', 'center')};
`
