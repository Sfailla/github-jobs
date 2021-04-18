import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

function renderWithTheme(component, { lightTheme = 'light', ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme[lightTheme]}>{children}</ThemeProvider>
  )

  return render(component, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
// override React Testing Library
export { renderWithTheme as render }
