import styled from 'styled-components/macro'
import { searchbarHeight, media, DesignSystem } from '../../../../styles/shared'
import { flex } from '../../../../styles/mixins'

const { shadow } = DesignSystem

export const Container = styled.div`
  width: 100%;
  height: ${searchbarHeight};
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 6px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, auto) min-content;
  grid-template-rows: 8rem;
  box-shadow: ${shadow.small};
  position: absolute;
  top: -4rem;

  & > div:not(:last-child) {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  ${media.md`grid-template-columns: 1fr;`};
`

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: inherit;
  padding: 0 1.6rem 0 3.2rem;
  ${flex()};

  & > svg {
    position: absolute;
    top: 50%;
    left: 3.2rem;
    transform: translateY(-50%);
  }

  ${media.lg`padding: 0 1.6rem 0 2.4rem;`};
  ${media.md`${flex('flex-start', 'center')};`};
`
export const Wrapper = styled.div`
  width: 100%;
  ${flex('flex-start', 'center')};
  pointer-events: none;
  position: relative;
  z-index: 1;
  ${media.md`${flex('space-between', 'center')}`};
`

export const Form = styled.form``

export const SvgWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  ${flex()};
`

export const Label = styled.label`
  padding-top: 4px;
  font-size: 1.6rem;
  margin-left: 1.6rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.input.text};
  font-size: 16px;
  opacity: 50%;
  pointer-events: none;

  ${media.md`margin: 0;`};
`

export const BoldLabel = styled(Label)`
  font-weight: bold;
  font-size: 1.5rem;
  opacity: unset;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: none;
  outline: none;
  user-select: none;
  background-color: inherit;
  padding-left: 7.3rem;
  padding-right: 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.input.text};

  &:not(:placeholder-shown) + ${Wrapper} ${Label} {
    visibility: hidden;
  }

  ${media.lg`padding-left: 6.4rem;`};
  ${media.md`padding-left: 2.4rem;`};
`

export const Checkbox = styled.input`
  display: block;
  background-color: #19202d;
  pointer-events: all;
  cursor: pointer;
  min-width: 2.4rem;
  min-height: 2.4rem;
  border: none;
  outline: none;
`
