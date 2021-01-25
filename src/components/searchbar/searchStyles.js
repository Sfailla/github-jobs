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
  border-radius: 6px;
`;

export const InputWrapper = styled.form`
  display: grid;
  grid-template-columns: minmax(22.2rem, 46.3rem) minmax(21.3rem, 30rem) minmax(
      25.2rem,
      1fr
    );
  grid-template-rows: 8rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  &:not(:last-of-type) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }
  ${({ checkbox, theme }) => checkbox && theme.mixin.flex()};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: inline-flex;
  border: none;
  border-radius: 6px;
  outline: none;
  padding-left: 3.2rem;

  ${({ checkbox, svg }) =>
    checkbox &&
    `
      width: 2.4rem;
      height: 2.4rem;
      appearance: none;
      padding: 0;
      margin-right: 1.6rem;

      &:checked::before {
        content: '';
        background-color: #5964E0;
        background-image: url(${svg});
        background-repeat: no-repeat;
        background-position: center;
      }

      &::before {
        content: '';
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 3px;
        background: rgba(25, 32, 45, .1);
      }
    `}
`;

export const JobInput = styled(Input)``;

export const LocationInput = styled(Input)``;

export const LabelWrapper = styled.div`
  display: inline-block;
  position: absolute;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: black;
  opacity: 0.5;
`;
