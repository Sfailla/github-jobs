import styled from 'styled-components/macro'
import { media, DesignSystem } from '../../styles/shared'

const { color } = DesignSystem

export const StyledButton = styled.button`
  width: 100%;
  height: 4.8rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  letter-spacing: 0.5px;
  pointer-events: auto;
  transition: 0.2s ease-in-out;
  background-color: ${color.button.normal};
  ${({ block }) => block && `max-width: 100%`};

  &:hover {
    background-color: ${color.button.hover};
  }
`

export const SearchbarButton = styled(StyledButton)`
  min-width: 14.1rem;
  margin-left: 2.7rem;

  ${media.lg`min-width: 8rem`}
`

// export const MobileSearchButton = styled(StyledButton)`
//   width: 4.8rem;
//   /* ${color}; */
// `

// export const IconButton = styled.button`
//   width: 48px;
//   height: 48px;
//   border: 0;
//   outline: 0;
//   background: transparent;
//   cursor: pointer;
//   z-index: 10;
// `
