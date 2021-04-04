import React from 'react';
import Header from '../header';
import Page from '../page';
import { AppContextProvider } from '../../context';
import { SearchModal } from '../searchbar/searchModal';

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(checked => !checked);
  };

  return (
    <AppContextProvider>
      <React.Fragment>
        <SearchModal onChange={handleChange} checked={checked} />
        <Header onChange={handleChange} checked={checked} />
        <Page name="jobs" />
      </React.Fragment>
    </AppContextProvider>
  );
}

export default App;
