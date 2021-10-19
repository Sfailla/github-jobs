import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AppContextProvider } from '../../contexts'
import { useFetchData, useBuildQuery } from '../../hooks'
import Header from '../header'
import JobSearch from '../../pages/JobSearch'
import JobInfo from '../../pages/JobInfo'

function App() {
  const [updateQuery, setUpdateQuery] = React.useState({
    search: 'javascript developer',
    page: 1
  })

  const query = useBuildQuery(updateQuery)
  const { results, isLoading } = useFetchData(query)

  return (
    <AppContextProvider>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <JobSearch jobData={results} isLoading={isLoading} setUpdateQuery={setUpdateQuery} />
            )}
          />
          <Route exact path="/job-info" component={JobInfo} />
        </Switch>
      </Router>
    </AppContextProvider>
  )
}

export default App
