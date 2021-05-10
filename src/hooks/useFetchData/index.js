import React from 'react'
// const CORS_PROXY = 'https://proxy.hoppscotch.io/'
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const CORS_PROXY = 'https://cors.bridged.cc/'
const BASE_URL = `${CORS_PROXY}https://jobs.github.com/positions.json`

const useFetchData = (query, options = {}) => {
  const [results, setResults] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState({})
  const cache = React.useRef({})

  React.useEffect(() => {
    const getApiData = async () => {
      setLoading(true)
      if (cache.current[query]) {
        setResults(cache.current[query])
        setLoading(false)
      } else {
        try {
          const response = await fetch(`${BASE_URL}${query}`, { ...options })
          const data = await response.json()
          cache.current[query] = data
          setResults(data)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }
      }
    }

    getApiData()
  }, [setResults, setError, setLoading, options, query])

  return { results, loading, error }
}

export default useFetchData
