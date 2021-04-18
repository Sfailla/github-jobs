import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  max-width: 111rem;
  height: 8rem;
  background: ${({ theme }) => theme.background.secondary};
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 6px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8rem;

  & > *:not(:last-child) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }
`

export const Section = styled.div`
  width: 100%;
  height: 100%;
`
