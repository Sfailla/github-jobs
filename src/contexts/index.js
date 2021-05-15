import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.js'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState('light')

  const values = { setMode }

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}
