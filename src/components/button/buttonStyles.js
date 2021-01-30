import styled from 'styled-components/macro';

export const Container = styled.button`
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

  ${({ theme, inputBtn }) =>
    inputBtn &&
    `
      margin-left: 2.7rem;
      margin-right: 1.6rem;
      width: 12.3rem;
      background-color: ${theme.color.button.normal};

      &:hover {
        background-color: ${theme.color.button.hover};
      }
    `}
`;
