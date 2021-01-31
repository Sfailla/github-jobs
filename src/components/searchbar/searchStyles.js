import styled from 'styled-components/macro';
import { media } from '../../styles/shared';

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
  grid-template-columns: minmax(20rem, 1fr) minmax(20rem, 1fr) minmax(
      min-content,
      34.5rem
    );
  grid-template-rows: 8rem;

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  display: inline-flex;
  border: none;
  border-radius: 6px;
  outline: none;
  background: inherit;
`;

export const Checkbox = styled(Input)`
  width: 2.4rem;
  height: 2.4rem;
  appearance: none;
  padding: 0;
  margin-left: 3.2rem;
  margin-right: 1.6rem;

  ${media.tablet_lg`margin-left: 2rem`};
  ${media.tablet`margin-left: 1rem`};

  &:checked::before {
    content: '';
    background-color: ${({ theme }) => theme.color.primary.deepblue};
    background-image: ${({ svg }) => `url(${svg})`};
    background-repeat: no-repeat;
    background-position: center;
  }

  &::before {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 3px;
    background: ${({ theme }) => theme[theme.mode].input.checkbox};
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  line-height: 1.6rem;
  padding-top: 0.5rem;
  opacity: 0.5;
  color: ${({ theme }) => theme[theme.mode].input.text};
  z-index: 5;

  ${({ text }) => text && `font-size: 1.6rem;padding-left: 1.6rem;`};
  ${({ bold }) => bold && `font-weight: bold;opacity: 1; padding-right: 2.7rem`};
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

  ${media.tablet_lg`padding-left: 6.4rem`};
  ${media.tablet`padding-left: 5rem`};
`;

export const LabelWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')};

  & img {
    margin-left: 3.2rem;
    z-index: 5;

    ${media.tablet_lg`margin-left: 2.4rem`};
    ${media.tablet`margin-left: 1rem`};
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')};

  &:not(:last-of-type) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  & ${FilteredInput}:not(:placeholder-shown) + ${LabelWrapper} > ${Label} {
    display: none;
  }
`;

export const CollapsibleInputGroup = styled(InputGroup)`
  ${({ changeFlex }) => changeFlex && 'justify-content: flex-end'};

  ${media.mobile`
    display: none;
  `}
`;
