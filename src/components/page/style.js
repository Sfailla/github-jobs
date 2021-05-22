import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
`
