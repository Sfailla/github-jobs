import styled from 'styled-components/macro';
import { media } from '../../styles/shared';

export const Container = styled.div`
  width: 100%;
  max-width: 111rem;
  min-width: 32.7rem;
  height: 8rem;
  background: ${({ theme: { theme, mode } }) => theme[mode].background.secondary};
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 6px;
  overflow: hidden;

  display: grid;
  grid-template-columns: minmax(22rem, 46.3rem) minmax(20rem, 30rem) minmax(25.2rem, 1fr);
  grid-template-rows: 8rem;

  & > *:not(:last-child) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  ${media.tablet`
    grid-template-columns: minmax(min-content, 22rem) minmax(min-content, 20rem) minmax(
      min-content,
      1fr
    );
  `}

  ${media.tablet_sm`
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

export const FilteredInput = styled(Input)`
  width: 100%;
  height: inherit;
  padding-left: 7.2rem;
  font-size: 1.6rem;
  color: ${({ theme: { theme, mode } }) => theme[mode].input.text};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  // ${media.tablet_lg`padding-left: 6.4rem`};
  ${media.tablet`padding-left: 5rem`};
`;

export const Checkbox = styled(Input)`
  width: 2.4rem;
  height: 2.4rem;
  appearance: none;
  padding: 0;
  margin-right: 1.6rem;
  margin-left: 3.2rem;

  &:checked::before {
    content: '';
    background-color: ${({ theme: { theme } }) => theme.color.primary.deepblue};
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
    background: ${({ theme: { theme, mode } }) => theme[mode].input.checkbox};
  }
`;

export const ModalCheckbox = styled(Checkbox)`
  margin-left: 0;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  line-height: 1.6rem;
  padding-top: 0.5rem;
  opacity: 0.5;
  color: ${({ theme: { theme, mode } }) => theme[mode].input.text};
  z-index: 5;

  ${({ text }) => text && `font-size: 1.6rem;`};
  ${({ bold }) => bold && `font-weight: bold;opacity: 1;white-space: nowrap`};
`;

export const Wrapper = styled.div`
  height: auto;

  ${({ theme: { theme } }) => theme.mixin.flex('flex-start', 'center')};

  & img {
    z-index: 5;
  }
`;

export const SearchWrapper = styled(Wrapper)`
  padding-left: 3.2rem;

  & label {
    padding-left: 1.71rem;
  }

  // ${media.tablet_lg`padding-left: 2.4rem`};
  // ${media.tablet`padding-left: 1rem`};
  ${media.tablet_sm`
    ${({ theme: { theme } }) => theme.mixin.flex('space-between', 'center')};
    width: 100%`};
`;

export const LocationWrapper = styled(Wrapper)`
  padding-left: 3.2rem;

  & label {
    padding-left: 1.62rem;
  }

  // ${media.tablet_lg`padding-left: 2.4rem`};
  ${media.tablet`padding-left: 1.6rem`};
`;

export const Group = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${({ theme: { theme } }) => theme.mixin.flex('flex-start', 'center')};

  & ${FilteredInput}:not(:placeholder-shown) + ${Wrapper} > ${Label} {
    visibility: hidden;
  }
`;

export const CollapsibleGroup = styled(Group)`
  justify-content: space-between;
`;

export const CollapsibleGroupModal = styled(Group)`
  padding: 2.4rem;
  ${({ theme: { theme } }) => theme.mixin.flex('space-between', 'flex-start', 'column')};
`;
