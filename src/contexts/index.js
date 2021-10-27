import React from 'react'
import { getColorSchemePreference } from '../utils/helperFns'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.js'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState(getColorSchemePreference())

  const values = React.useMemo(() => ({ setMode }), [setMode])

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}
