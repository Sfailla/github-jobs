import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 12rem;
  padding-left: 4rem;
  padding-right: 4rem;

  background: ${({ theme }) => theme.background.primary};
`
