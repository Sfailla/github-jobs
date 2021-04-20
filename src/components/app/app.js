import React from 'react'
import Header from '../header'
import { AppContextProvider } from '../../contexts'
import Page from '../page'
import JobSearch from '../../pages/JobSearch/jobSearch'

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Page path="/" component={JobSearch} />
    </AppContextProvider>
  )
}

export default App
