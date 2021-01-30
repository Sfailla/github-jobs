import styled from 'styled-components/macro';

export const Background = styled.header`
  width: 100%;
  height: 16rem;
  background: url(${({ src }) => src}) no-repeat left / cover;
  padding: 0 4rem;
  background-color: ${({ theme }) => theme[theme.mode].background.primary};
`;

export const Container = styled.div`
  width: 100%;
  height: 16rem;
  ${({ theme }) => theme.mixin.flex('space-between', 'center')};
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.2rem;
`;
