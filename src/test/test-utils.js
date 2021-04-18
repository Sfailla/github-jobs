import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Theme'

function renderWithTheme(component, options) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={{ theme, mode: 'light' }}>{children}</ThemeProvider>
  )

  return render(component, { wrapper: Wrapper, ...options })
}

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={{ theme, mode: 'light' }}>{children}</ThemeProvider>
}

export * from '@testing-library/react'
// override React Testing Library
export { renderWithTheme as render, ThemeWrapper }
