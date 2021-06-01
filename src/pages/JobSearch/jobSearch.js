import React from 'react'
import { useFetchData, useBuildQuery, useFormValidation } from '../../hooks'
import { Container, GridContainer } from './style'
import { InfoCard as Card } from '../../components/cards'
import Searchbar from '../../components/searchbar/desktop'
import { LayoutWrapper } from '../../styles/shared'
import validate from './validateJobSearch'

const INITIAL_VALUES = {
  search: null,
  location: null,
  full_time: false
}

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

function JobSearch() {
  const [checked, setChecked] = React.useState(false)
  const [updateQuery, setUpdateQuery] = React.useState({})

  const { values, handleChange, handleSubmit } = useFormValidation(
    INITIAL_VALUES,
    validate,
    submitRequest
  )

  const handleCheck = React.useCallback(() => setChecked(checked => !checked), [])

  // const debounceSearch = useDebounce(search, 1000)

  function submitRequest() {
    setUpdateQuery({
      search: values.search,
      location: values.location,
      full_time: values.full_time,
      page: 1
    })
  }

  const query = useBuildQuery({ ...updateQuery })

  const { results, isLoading } = useFetchData(query)

  return (
    <Container>
      <LayoutWrapper>
        <Searchbar {...{ checked, handleCheck, handleChange, handleSubmit }} />

        {isLoading && (
          <div style={{ paddingTop: '8rem' }}>please wait while we load your data...</div>
        )}

        {!isLoading && results.length < 1 ? (
          <div style={{ paddingTop: '8rem' }}>
            Sorry no results were found 😕. Please try searching another job!
          </div>
        ) : (
          <GridContainer>
            {results.length > 0 && results.map(data => <Card key={data.id} data={data} />)}
          </GridContainer>
        )}
      </LayoutWrapper>
    </Container>
  )
}

export default React.memo(JobSearch)
