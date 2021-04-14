import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [mode, setMode] = React.useState('light');

  const values = {
    showModal,
    setShowModal,
    setMode
  };

  return (
    <AppContext.Provider value={values}>
      <ThemeProvider theme={{ mode, theme: Theme }}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
