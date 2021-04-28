import styled from 'styled-components/macro'
import { flex } from '../../../../styles/mixins'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: inherit;

  & > svg {
    position: absolute;
    top: 50%;
    left: 3.2rem;
    transform: translateY(-50%);
  }
`

export const Wrapper = styled.div`
  width: 100%;
  ${flex('flex-start', 'center')};
  pointer-events: none;
  padding: 2.8rem 3.2rem;
  position: relative;
  z-index: 1;
`

export const SvgWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  ${flex()};
`

export const Label = styled.label`
  padding-top: 4px;
  ${flex()};
  font-size: 1.6rem;
  margin-left: 1.6rem;
  white-space: nowrap;
  color: #19202d;
  font-size: 16px;
  opacity: 50%;
`

export const BoldLabel = styled(Label)`
  font-weight: bold;
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

  &::placeholder-shown ${Label} {
    display: none;
  }
`

export const Checkbox = styled.input`
  width: 2.4rem;
  height: 2.4rem;
`
