import styled from 'styled-components/macro';
import { media, headerHeight } from '../../styles/shared';

export const Background = styled.header`
  width: 100%;
  height: ${headerHeight};
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  background-size: cover;
  padding: 0 4rem;
  background-color: ${({ theme: { theme, mode } }) => theme[mode].background.primary};

  ${media.mobile`height: 13.2rem; padding: 0 2.4rem;`};
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 4.4rem;
  ${({ theme: { theme } }) => theme.mixin.flex('space-between', 'center')};

  ${media.mobile`padding-top: 3.2rem;`};
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.2rem;
`;
