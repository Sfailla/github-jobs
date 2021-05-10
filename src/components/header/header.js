import React from 'react'
import { Background } from './style'

export default function Header({ children, ...props }) {
  return <Background {...props}>{children}</Background>
}
