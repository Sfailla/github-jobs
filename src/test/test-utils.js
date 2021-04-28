import React from 'react'
import { render } from '@testing-library/react'
import { AppContextProvider } from '../contexts'

function renderWithTheme(component, { ...options } = {}) {
  const Wrapper = ({ children }) => <AppContextProvider>{children}</AppContextProvider>

  return render(component, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
// override React Testing Library
export { renderWithTheme as render }
