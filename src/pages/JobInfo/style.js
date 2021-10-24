import styled from 'styled-components/macro'
import { flex } from '../../styles/mixins'

export const Container = styled.div`
  width: 100%;
  background-color: lightblue;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
  ${flex('center', 'center', 'column')}
`

export const ReverseMarginLayout = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -40px;
  padding: 0 2rem;
`
