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

    const successFetchUrl = 'https://jobs.github.com/positions.json'

    // execute fetch request
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchData(successFetchUrl),
      []
    )

    await waitForNextUpdate()

    // ** need to figure out why the url is called twice?? **
    // expect(global.fetch).toHaveBeenCalledWith(stubbedFetchUrl)

    expect(result.current).toStrictEqual({
      results: stubbedJobs,
      loading: false,
      error: {}
    })
  })

  // it('should respond with error', async () => {
  //   jest.spyOn(global, 'fetch').mockImplementation(() =>
  //     Promise.reject({
  //       error: () => 'error fetching url'
  //     })
  //   )

  //   const errorFetchUrl = 'https://jobs.github.com/positions.json-error'

  //   const { result, waitForNextUpdate } = renderHook(
  //     () => useFetchData(errorFetchUrl),
  //     []
  //   )

  //   await waitForNextUpdate()

  //   console.log(result.current)

  //   expect(result.current).toStrictEqual({
  //     results: [],
  //     loading: false,
  //     error: 'error fetching url'
  //   })
  // })
})
