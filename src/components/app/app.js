import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useFetchData, useBuildQuery } from '../../hooks'
import Header from '../header'
import JobSearch from '../../pages/JobSearch'
import JobInfo from '../../pages/JobInfo'

function App() {
  const [updateQuery, setUpdateQuery] = React.useState({
    search: 'javascript developer',
    location: false,
    fullTime: false,
    page: 1
  })
  const [data, setData] = React.useState([])

  // const query = useBuildQuery(updateQuery)
  const APP_ID = process.env.REACT_APP_API_ID
  const APP_KEY = process.env.REACT_APP_API_KEY
  const CONTENT_TYPE = 'application/json'
  const query = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&content-type=${CONTENT_TYPE}&results_per_page=15&what=javascript%20developer'
  )}`

  const { results, isLoading } = useFetchData(query)

  React.useEffect(() => {
    if (results) {
      setData(results)
    }
  }, [results])

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <JobSearch jobData={data} isLoading={isLoading} setUpdateQuery={setUpdateQuery} />
            )}
          />
          <Route exact path="/job-info" component={JobInfo} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
