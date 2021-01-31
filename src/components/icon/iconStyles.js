import styled from 'styled-components/macro';

export const Image = styled.img`
  ${({ pad }) => pad && `padding-left: 7px`};
`;
