import styled from 'styled-components/macro';

export const Head = styled.header`
  width: 100%;
  height: 16rem;
  background: url(${({ src }) => src}) no-repeat left / cover;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  height: 100%;
  ${({ theme }) => theme.mixin.flex('space-between', 'center')};
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.2rem;
`;

export const Toggle = styled.div`
  display: block;
  position: relative;
  width: 20rem;
  height: 4rem;
  background: lightpink;
`;
