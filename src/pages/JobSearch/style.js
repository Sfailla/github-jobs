import styled from 'styled-components/macro'
import { media } from '../../styles/shared'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.background.primary};
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
`
