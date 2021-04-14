import React from 'react';
import Header from '../header';
import Page from '../page';
import { AppContextProvider } from '../../contexts';
import { SearchModal } from '../searchbar/searchModal';
import JobSearch from '../../pages/JobSearch/jobSearch';

function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => setChecked(checked => !checked);

  return (
    <AppContextProvider>
      <SearchModal onChange={handleChange} checked={checked} />
      <Header onChange={handleChange} checked={checked} />
      <Page path="/" component={JobSearch} />
    </AppContextProvider>
  );
}

export default App;
