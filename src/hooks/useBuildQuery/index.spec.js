import { renderHook } from '../../test/test-utils'
import useBuildQuery from './index'

describe('testing useBuildQuery custom hook', () => {
  const queryParams = {
    search: 'javascript',
    page: 1
  }

  const BASE_URL =
    'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4a514151&app_key=cab9e5a8b0fb8a790eb7c91c5b037f92&results_per_page=20&content-type=application/json?&what=javascript'

  test('should render BASE_URL only without params', () => {
    const { result } = renderHook(() => useBuildQuery(queryParams))

    expect(result.current).toBe(BASE_URL)
  })
})
