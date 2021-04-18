import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme.js'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [mode, setMode] = React.useState('light')

  const values = {
    showModal,
    setShowModal,
    setMode
  }

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}
