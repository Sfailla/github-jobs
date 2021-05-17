import { renderHook } from '../../test/test-utils'
import useBuildQuery from './index'

describe('testing useBuildQuery custom hook', () => {
  const queryParams = {
    search: 'javascript',
    location: 'ny',
    fullTime: true,
    pages: 1
  }

  const BASE_URL = 'https://cors.bridged.cc/https://jobs.github.com/positions.json?'
  const SEARCH_URL = '&search=javascript'
  const LOCATION_URL = '&location=ny'
  const FULL_TIME_URL = '&full_time=on'
  const PAGINATION_URL = `&pages=${queryParams.pages}`

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
    const { result } = renderHook(() => useBuildQuery({ fullTime: queryParams.fullTime }))

    expect(result.current).toBe(BASE_URL + FULL_TIME_URL)
  })

  test('should render BASE_URL and pagination with query param', () => {
    const { result } = renderHook(() => useBuildQuery({ pages: queryParams.pages }))

    expect(result.current).toBe(BASE_URL + PAGINATION_URL)
  })

  test('should render BASE_URL and all query search params', () => {
    const { result } = renderHook(() => useBuildQuery({ ...queryParams }))

    expect(result.current).toBe(
      BASE_URL + SEARCH_URL + LOCATION_URL + FULL_TIME_URL + PAGINATION_URL
    )
  })
})
