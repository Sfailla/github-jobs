import React from 'react';
import Header from '../header';
import Searchbar from '../searchbar';
import Page from '../page';

import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <React.Fragment>
        <Header>
          <Searchbar />
        </Header>
        <Page name="jobs" />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
