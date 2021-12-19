import React from 'react'
import { getColorSchemePreference } from '../utils/helperFns'
import { ThemeProvider } from 'styled-components'
// import { theme } from '../styles/theme.js'

export const theme = {
  light: {
    background: {
      primary: '#ECECEC',
      secondary: '#FFFFFF'
    },
    input: {
      text: '#19202D',
      checkbox: ' rgb(25, 32, 45, .1)'
    },
    button: {
      normal: 'rgba(89, 100, 224, .10)',
      hover: 'rgba(89, 100, 224, .35)',
      text: '#5964E0'
    },
    text: {
      normal: '#19202D'
    }
  },
  dark: {
    background: {
      primary: '#121721',
      secondary: '#19202D'
    },
    input: {
      text: '#FFFFFF',
      checkbox: 'rgba(255, 255, 255, .10)'
    },
    button: {
      normal: 'rgba(255, 255, 255, .10)',
      hover: 'rgba(255, 255, 255, .35)',
      text: '#FFFFFF'
    },
    text: {
      normal: '#FFFFFF'
    }
  }
}

const AppContext = React.createContext()

export const useAppContext = () => {
  const context = React.useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }

  return context
}

export const AppContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState(getColorSchemePreference())

  const values = React.useMemo(() => ({ setMode }), [setMode])

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}
