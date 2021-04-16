import React from 'react'
import Header from '../header'
import { AppContextProvider } from '../../contexts'
import Page from '../page'
import JobSearch from '../../pages/JobSearch/jobSearch'

function App() {
  const [checked, setChecked] = React.useState(false)
  const handleChange = () => setChecked(checked => !checked)

  return (
    <AppContextProvider>
      <Header {...{ checked, handleChange }} />
      <Page path="/" component={JobSearch} />
    </AppContextProvider>
  )
}

export default App
