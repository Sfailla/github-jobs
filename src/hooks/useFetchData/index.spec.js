import { renderHook } from '../../test/test-utils'
import useFetchData from './index'
import { stubbedJobs } from '../../test/helpers'

const fetchUrl = 'https://api-call.com'

afterEach(() => global.fetch.mockClear())
afterAll(() => global.fetch.mockRestore())

describe('useFetchData hook', () => {
  test('should make successful api call and return data', async () => {
    // mock the api call
    jest.spyOn(global, 'fetch').mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve(stubbedJobs)
        })
    )

    // execute fetch request
    const { result, waitFor } = renderHook(() => useFetchData(fetchUrl))

    expect(result.current.isLoading).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith(fetchUrl)
    expect(global.fetch).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        results: stubbedJobs,
        isLoading: false,
        error: {}
      })
    })
  })

  test('should use cached results if api call is made with same url', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve(stubbedJobs)
        })
    )

    const { result, waitFor, rerender } = renderHook(url => useFetchData(url), {
      initialProps: fetchUrl
    })

    expect(result.current.isLoading).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith(fetchUrl)
    // first call will not be cached
    expect(global.fetch).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        results: stubbedJobs,
        isLoading: false,
        error: {}
      })
    })

    rerender(fetchUrl)

    expect(result.current.isLoading).toBe(false)
    expect(global.fetch).toHaveBeenCalledWith(fetchUrl)
    // same url will be cached so no api call will be made
    expect(global.fetch).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        results: stubbedJobs,
        isLoading: false,
        error: {}
      })
    })

    rerender('https://api-call.com/new')

    expect(result.current.isLoading).toBe(true)
    // url is different so api call will be made
    expect(global.fetch).toHaveBeenCalledWith('https://api-call.com/new')
    expect(global.fetch).toHaveBeenCalledTimes(2)

    await waitFor(() => {
      expect(result.current).toStrictEqual({
        results: stubbedJobs,
        isLoading: false,
        error: {}
      })
    })
  })

  test('should respond with error when promise is rejected', async () => {
    // mock api call
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => await Promise.reject('error fetching url'))

    const { result, waitForNextUpdate } = renderHook(() => useFetchData(fetchUrl))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate(() => {
      expect(result.current).toStrictEqual({
        results: {},
        isLoading: false,
        error: 'error fetching url'
      })
    })
  })
})
