import {
  StyledButton,
  SearchbarButton,
  MobileSearchButton,
  IconButton
} from './buttonStyles'

export function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export { SearchbarButton, MobileSearchButton, IconButton }
