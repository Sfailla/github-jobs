import { renderHook } from '../../test/test-utils'
import useFetchData from './index'

const stubbedJobs = [
  {
    id: '5514a0a7',
    company: 'Canada Life',
    title: 'Software Developer',
    location: 'Toronto, Ontario, Canada'
  },
  {
    id: '7fe0-4647',
    company: 'Enterprise',
    title: 'Junior Software Developer',
    location: 'New York City, New York'
  }
]

const fetchUrl = 'https://jobs.github.com/positions.json'

afterEach(() => global.fetch.mockClear())
afterAll(() => global.fetch.mockRestore())

describe('custom useFetchData hook', () => {
  it('should return data after fetch', async () => {
    // mock the api call
    jest.spyOn(global, 'fetch').mockImplementation(
      async () =>
        await Promise.resolve({
          json: async () => await Promise.resolve(stubbedJobs)
        })
    )

    // execute fetch request
    const { result, waitForNextUpdate } = renderHook(() => useFetchData(fetchUrl))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate({ timeout: 6000 })

    expect(global.fetch).toHaveBeenCalledWith(fetchUrl)
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(result.current).toStrictEqual({
      results: stubbedJobs,
      isLoading: false,
      error: {}
    })
  })

  it('should respond with error', async () => {
    // mock api call
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => await Promise.reject('error fetching url'))

    const { result, waitForNextUpdate } = renderHook(() => useFetchData(fetchUrl))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate({ timeout: 6000 })

    expect(result.current).toStrictEqual({
      results: {},
      isLoading: false,
      error: 'error fetching url'
    })
  })
})
