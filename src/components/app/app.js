import React from 'react';
import Header from '../header';
import Searchbar from '../searchbar';
import Page from '../page';
import { ThemeContext } from './context';

import { ThemeProvider } from 'styled-components';
import { SearchModal } from '../searchbar/searchModal';

function App() {
  const [theme, setTheme] = React.useState({ mode: 'light' });
  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header>
            <Searchbar />
          </Header>
          <Page name="jobs">
            <SearchModal />
          </Page>
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
