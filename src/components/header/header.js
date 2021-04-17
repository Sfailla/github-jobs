import React from 'react'
import { Background } from './headerStyles'

export default function Header({ children, ...props }) {
  return <Background {...props}>{children}</Background>
}
