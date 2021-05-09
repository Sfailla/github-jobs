import styled from 'styled-components/macro'
import { DesignSystem } from '../../../styles/shared'

const { shadow } = DesignSystem

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 6px;
  box-shadow: ${shadow.small};
`
