import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  max-width: 111rem;
  height: 8rem;
  background: ${({ theme }) => theme.color.secondary.white};
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const InputWrapper = styled.form`
  display: grid;
  grid-template-columns: minmax(22.2rem, 46.3rem) minmax(21.3rem, 30rem) minmax(
      25.2rem,
      1fr
    );
  grid-template-rows: 8rem;
`;

export const InputGroup = styled.div``;

export const Label = styled.label``;

export const Input = styled.input``;
