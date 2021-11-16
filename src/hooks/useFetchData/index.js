import React from 'react'

const useFetchData = url => {
  const [results, setResults] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState({})
  const cache = React.useRef({})

  const handleAsync = React.useCallback(async () => {
    setIsLoading(true)
    if (cache.current[url]) {
      setIsLoading(false)
      setResults(cache.current[url])
      return
    } else {
      try {
        const response = await fetch(url)
        const data = await response.json()

        cache.current[url] = data
        setResults(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [url])

  React.useEffect(() => {
    if (!url) return

    handleAsync()
  }, [handleAsync, url])

  return { results, isLoading, error }
}

export default useFetchData
