import styled from 'styled-components/macro';
import { headerHeight } from '../../styles/shared';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - ${headerHeight});
  padding-top: 7rem;

  background: ${({ theme: { theme, mode } }) => theme[mode].background.primary};
`;
