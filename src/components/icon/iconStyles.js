import styled from 'styled-components/macro';

export const Image = styled.img`
  ${({ pad }) => pad && `margin-left: 7px`};
`;
