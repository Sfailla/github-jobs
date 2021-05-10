import styled from 'styled-components/macro'
import { headerHeight } from '../../styles/shared'

export const Container = styled.div`
  width: 100%;
  /* height: calc(100vh - ${headerHeight}); */
  padding-top: 12rem;
  padding-left: 4rem;
  padding-right: 4rem;

  background: ${({ theme }) => theme.background.primary};
`
