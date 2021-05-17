import React from 'react'

const useFetchData = (query, options = {}) => {
  const [results, setResults] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState({})
  const cache = React.useRef({})

  React.useEffect(() => {
    async function getApiData() {
      setIsLoading(true)
      if (cache.current[query]) {
        setResults(cache.current[query])
        setIsLoading(false)
      } else {
        try {
          // set basic config | also allow ability to override or add custom config
          const config = { method: 'GET', ...options }
          const response = await fetch(query, config)
          const data = await response.json()
          // set cache data with url query
          cache.current[query] = data
          setResults(data)
        } catch (error) {
          setError(error)
        } finally {
          setIsLoading(false)
        }
      }
    }

    getApiData()
    // eslint-disable-next-line
  }, [query])

  return { results, isLoading, error }
}

export default useFetchData
