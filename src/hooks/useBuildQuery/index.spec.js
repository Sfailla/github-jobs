import { renderHook } from '../../test/test-utils'
import useBuildQuery from './index'

describe('testing useBuildQuery custom hook', () => {
  const queryParams = {
    search: 'javascript',
    location: 'ny',
    full_time: true
  }

  const BASE_URL = 'https://cors.bridged.cc/https://jobs.github.com/positions.json?'
  const SEARCH_URL = '&search=javascript'
  const LOCATION_URL = '&location=ny'
  const FULL_TIME_URL = '&full_time=on'
  const PAGINATION_URL = `&page=1`

  test('should render BASE_URL only without params', () => {
    const { result } = renderHook(() => useBuildQuery())

    expect(result.current).toBe(BASE_URL)
  })

  test('should render BASE_URL and search with query param', () => {
    const { result } = renderHook(() => useBuildQuery({ search: queryParams.search }))

    expect(result.current).toBe(BASE_URL + SEARCH_URL)
  })

  test('should render BASE_URL and location with query param', () => {
    const { result } = renderHook(() => useBuildQuery({ location: queryParams.location }))

    expect(result.current).toBe(BASE_URL + LOCATION_URL)
  })

  test('should render BASE_URL and full-time with query param', () => {
    const { result } = renderHook(() => useBuildQuery({ full_time: queryParams.full_time }))

    expect(result.current).toBe(BASE_URL + FULL_TIME_URL)
  })

  test('should render BASE_URL and pagination with query param', () => {
    const { result } = renderHook(() => useBuildQuery({}, 1))

    expect(result.current).toBe(BASE_URL + PAGINATION_URL)
  })

  test('should render BASE_URL and all query search params', () => {
    const { result } = renderHook(() => useBuildQuery({ ...queryParams }, 1))

    expect(result.current).toBe(
      BASE_URL + SEARCH_URL + LOCATION_URL + FULL_TIME_URL + PAGINATION_URL
    )
  })
})
