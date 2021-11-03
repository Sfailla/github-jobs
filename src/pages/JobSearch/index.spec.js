import React from 'react'
import { render } from '../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { buildSearchForm, stubbedJobs } from '../../test/helpers'

import JobSearch from '.'
import { useFormValidation } from '../../hooks'
import Searchbar from '../../components/searchbar'

jest.mock('../../hooks', () => ({
  useFormValidation: initialState => ({
    values: initialState,
    handleSubmit: jest.fn(event => event.preventDefault()),
    handleChange: jest.fn()
  }),
  useLayoutType: () => ({ layout: 'desktop' }),
  useWindowSize: () => ({ width: 1024, height: 768 })
}))

jest.mock('../../components/cards', () => ({
  InfoCard: data => <div data={data}>mocked card component</div>
}))

describe('should handle job search functionality', () => {
  test('should call hook values correctly', async () => {
    const setUpdateQuery = jest.fn()
    const validate = jest.fn()

    const { search, location } = buildSearchForm()
    const submit = jest.fn().mockImplementation(() =>
      setUpdateQuery({
        search,
        location
      })
    )
    const { values, handleSubmit, handleChange } = useFormValidation(
      { search, location },
      validate,
      submit()
    )

    const { getByRole, getByLabelText } = render(
      <JobSearch setUpdateQuery={setUpdateQuery}>
        <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} />
      </JobSearch>
    )

    const button = getByRole('button', { name: /search/i })
    const searchInput = getByLabelText(/filter by title/i)
    const locationInput = getByLabelText(/filter by location/i)

    userEvent.type(searchInput, values.search)
    userEvent.type(locationInput, values.location)
    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(submit).toHaveBeenCalledTimes(1)
    expect(setUpdateQuery).toHaveBeenCalledTimes(1)
    expect(setUpdateQuery).toHaveBeenCalledWith({
      search,
      location
    })
  })

  test('should render loader while fetching data', () => {
    const isLoading = true
    const jobData = []
    const loadingText = /please wait while we load your data.../i

    const { getByText } = render(<JobSearch jobData={jobData} isLoading={isLoading} />)

    expect(isLoading).toBeTruthy()
    expect(getByText(loadingText)).toBeInTheDocument()
  })

  test('should render message if data is not found', () => {
    const isLoading = false
    const jobData = null
    const notFoundText = /Sorry no results were found/i

    const { getByText } = render(<JobSearch jobData={jobData} isLoading={isLoading} />)

    expect(isLoading).toBeFalsy()
    expect(getByText(notFoundText)).toBeInTheDocument()
  })

  test('should render data if search results are successful', () => {
    const isLoading = false
    const { getAllByText } = render(<JobSearch jobData={stubbedJobs} isLoading={isLoading} />)

    expect(isLoading).toBeFalsy()
    expect(getAllByText(/mocked card component/i)[0]).toBeInTheDocument()
  })
})
