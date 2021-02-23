import styled from 'styled-components/macro';

export const Image = styled.img`
  ${({ width, height }) => `width: ${width}px; height: ${height}px`};
`;
