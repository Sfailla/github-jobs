import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [theme, setTheme] = React.useState({ mode: 'light' });

  return (
    <AppContext.Provider value={{ showModal, setShowModal, setTheme }}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
};
