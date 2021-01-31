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
`;

export const SearchbarButton = styled(Button)`
  max-width: 12.3rem;
  margin-left: 2.7rem;
  margin-right: 1.6rem;
  background-color: ${({ theme }) => theme.color.button.normal};

  &:hover {
    background-color: ${({ theme }) => theme.color.button.hover};
  }

  ${media.tablet_lg`max-width: 8rem;`}
`;
