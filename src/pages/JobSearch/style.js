import styled from 'styled-components/macro'
import { media } from '../../styles/shared'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
  justify-content: space-between;

  ${media.lg`
      grid-template-columns: repeat(2, 1fr);  
      grid-column-gap: 1rem; 
      justify-content: space-around;
  `};
`
