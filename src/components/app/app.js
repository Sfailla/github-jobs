import React from 'react';
import Header from '../header';
import Page from '../page';
import { ThemeContext } from './context';
import { ThemeProvider } from 'styled-components';
import { SearchModal } from '../searchbar/searchModal';
import { GlobalStyles } from '../../styles/global';

import styled from 'styled-components/macro';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

function App() {
  const [theme, setTheme] = React.useState({ mode: 'light' });
  const [checked, setChecked] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <ThemeContext.Provider value={{ setTheme, showModal, setShowModal }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles overlay={showModal} />
          <SearchModal show={showModal} onChange={handleChange} checked={checked} />
          <Header onChange={handleChange} checked={checked} />
          <Page name="jobs" />
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
