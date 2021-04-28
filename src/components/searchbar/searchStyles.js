import styled from 'styled-components/macro'
import { searchbarHeight } from '../../styles/shared'

export const Container = styled.div`
  width: 100%;
  height: ${searchbarHeight};
  background: ${({ theme }) => theme.background.secondary};
  margin-top: 4rem;
  border-radius: 6px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 8rem;

  & > *:not(:last-child) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }
`
