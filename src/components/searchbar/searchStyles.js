import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  max-width: 111rem;
  height: 8rem;
  background: ${({ theme }) => theme[theme.mode].background.secondary};
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
  position: relative;
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: inline-flex;
  border: none;
  border-radius: 6px;
  outline: none;
  background: inherit;

  ${({ theme, checkbox, svg }) =>
    checkbox &&
    `
      width: 2.4rem;
      height: 2.4rem;
      appearance: none;
      padding: 0;
      margin-left: 3.2rem;
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
        background: ${theme[theme.mode].input.checkbox};
      }
    `}
`;

export const Label = styled.label`
  font-size: 1.6rem;
  line-height: 1.6rem;
  opacity: 0.5;
  color: ${({ theme }) => theme[theme.mode].input.text};
  z-index: 5;

  ${({ text }) => text && `padding-left: 1.6rem; padding-top: .5rem;`};
  ${({ bold }) => bold && `font-weight: bold; opacity: 1; `};
`;

export const FilteredInput = styled(Input)`
  width: 100%;
  height: 8rem;
  padding-left: 7.2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme[theme.mode].input.text};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  &:not(:placeholder-shown) + ${Label} {
    display: none;
  }
`;

export const LocationInput = styled(Input)``;

export const LabelWrapper = styled.div`
  width: 100%;
  height: 8rem;
  position: absolute;

  ${({ theme }) => theme.mixin.flex('flex-start', 'center')};

  & img {
    padding-left: 3.2rem;
    z-index: 5;
  }
`;
