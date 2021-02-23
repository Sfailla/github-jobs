import React from 'react';
import Header from '../header';
import Page from '../page';
import { ThemeContext } from './context';

import { ThemeProvider } from 'styled-components';
import { SearchModal } from '../searchbar/searchModal';

function App() {
  const [theme, setTheme] = React.useState({ mode: 'light' });
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SearchModal onChange={handleChange} checked={checked} />
          <Header onChange={handleChange} checked={checked} />
          <Page name="jobs" />
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
