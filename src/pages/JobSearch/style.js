import styled from 'styled-components/macro'
import { media } from '../../styles/shared'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 160px);
  padding: 0 4rem;
  background-color: ${({ theme }) => theme.background.primary};

  ${media.sm`
    padding: 0 2rem;
  `}
`

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Loading = styled.div`
  padding-top: 8rem;
`

export const Message = styled.div`
  padding-top: 8rem;
`

export const GridContainer = styled.div`
  padding: 12rem 0 10.4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 6.5rem;
  justify-content: flex-start;

  ${media.lg`
    grid-template-columns: repeat(2, 1fr);  
    grid-column-gap: 3rem; 
    justify-content: space-around;
  `};

  ${media.md`
    grid-template-columns: 1fr;
    overflow: ${({ $open }) => ($open ? 'hidden' : 'visible')};
    height: ${({ $open }) => ($open ? 'calc(100vh - 160px)' : 'auto')};
  `}
`
