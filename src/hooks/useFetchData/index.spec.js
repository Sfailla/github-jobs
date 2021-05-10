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
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(stubbedJobs)
      })
    )

    // execute fetch request
    const { result, waitForNextUpdate } = renderHook(() => useFetchData(fetchUrl), [])

    await waitForNextUpdate({ timeout: 6000 })

    // ** need to figure out why the url is called twice?? **
    // expect(global.fetch).toHaveBeenCalledWith(successFetchUrl)

    expect(result.current).toStrictEqual({
      results: stubbedJobs,
      loading: false,
      error: {}
    })

    expect(global.fetch).toHaveBeenCalledWith(fetchUrl)
  })

  it('should respond with error', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.reject('error fetching url'))

    const { result, waitForNextUpdate } = renderHook(() => useFetchData(null), [])

    await waitForNextUpdate({ timeout: 6000 })

    expect(result.current).toStrictEqual({
      results: {},
      loading: true,
      error: 'error fetching url'
    })
  })
})
