import styled from 'styled-components/macro';
import { media } from '../../styles/shared';

export const Button = styled.button`
  width: 100%;
  max-width: 14.1rem;
  height: 4.8rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  transition: 0.2s ease-in-out;
  background-color: ${({ theme: { theme } }) => theme.color.button.normal};
  ${({ fullWidth }) => fullWidth && `max-width: 100%`};

  &:hover {
    background-color: ${({ theme: { theme } }) => theme.color.button.hover};
  }
`;

export const SearchbarButton = styled(Button)`
  max-width: 12.3rem;
  margin-right: 1.6rem;
  margin-left: 1rem;

  ${media.tablet_lg`width: 8rem;`}
`;

export const MobileSearchButton = styled(Button)`
  width: 4.8rem;
  ${({ theme: { theme } }) => theme.mixin.flex()};
`;

export const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  z-index: 10;
`;
