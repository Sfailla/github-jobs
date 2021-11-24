import styled from 'styled-components/macro'
import { flex, absoluteCenter } from '../../../../styles/mixins'
import { media, DesignSystem } from '../../../../styles/shared'

const { color } = DesignSystem

export const OuterContainer = styled.div`
  width: 100%;
  height: 21.7rem;
  background-color: transparent;
  ${absoluteCenter()};
  ${flex()};
`

export const Container = styled.form`
  width: calc(100% - 8rem);
  overflow: hidden;
  /* max-width: 500px; */
  height: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background.secondary};
  position: relative;
  ${flex('flex-start', 'flex-start', 'column')};

  ${media.sm`
    width: calc(100% - 4rem);
  `}
`

export const Header = styled.header`
  width: 100%;
  height: 7.2rem;
  padding: 0 2.4rem;
  overflow: hidden;
  border-bottom: 1px solid ${color.secondary.darkgrey};
`

export const InputContainer = styled.div`
  width: inherit;
  height: 7rem;
  position: relative;
  ${flex('flex-start', 'center')};
`

export const InputContentWrapper = styled.div`
  width: 100%;
  height: 2.4rem;
  pointer-events: none;
  ${flex('flex-start', 'center')};
  z-index: 1;
`

export const Label = styled.label`
  padding-top: 0.6rem;
  padding-left: 1.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text.normal};
  opacity: 0.5;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 2.4rem;
  ${flex('space-between', 'center', 'column')};
`

export const Checkbox = styled.input`
  pointer-events: all;
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const LocationInput = styled.input`
  width: 100%;
  height: inherit;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text.normal};
  background-color: inherit;
  padding-left: 3.24rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: none;
  outline: none;

  &:not(:placeholder-shown) + ${InputContentWrapper} ${Label} {
    visibility: hidden;
  }
`
