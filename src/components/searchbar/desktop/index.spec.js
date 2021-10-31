import { render, fireEvent } from '../../../test/test-utils'
import userEvent from '@testing-library/user-event'

import DesktopSearchbar from './index'
import { SearchbarComponents as Searchbar } from '../components'

const buildUserForm = () => {
  return {
    search: 'javascript',
    location: 'New York'
  }
}

describe('inputs should work correctly for desktop searchbar component', () => {
  test('search input should start with empty string and change value after onChange event', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<DesktopSearchbar handleChange={handleChange} />)
    const searchInput = getByLabelText(/Filter by title/i)

    const { search } = buildUserForm()

    userEvent.type(searchInput, search)

    expect(handleChange).toHaveBeenCalled()
    expect(searchInput.value).toEqual(search)
  })

  test('location input should start with empty string and change value after onChange event', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<DesktopSearchbar handleChange={handleChange} />)
    const locationInput = getByLabelText(/Filter by location/i)
    const location = 'New York'

    userEvent.type(locationInput, location)

    expect(handleChange).toHaveBeenCalled()
    expect(locationInput.value).toEqual(location)
  })
})

describe('desktop checkbox and button should work correctly', () => {
  test('should correctly toggle checkbox', () => {
    const handleCheck = jest.fn()
    const { getByRole } = render(<DesktopSearchbar handleCheck={handleCheck} />)
    const checkbox = getByRole('checkbox')

    expect(checkbox.checked).toBeFalsy()
    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)

    expect(handleCheck).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked()
    expect(checkbox.checked).toBeTruthy()
  })

  test('submit button should trigger onSubmit function in parent component', () => {
    const handleSubmit = jest.fn()
    const { getByRole, getByLabelText } = render(
      <Searchbar onSubmit={handleSubmit}>
        <DesktopSearchbar />
      </Searchbar>
    )

    const searchInput = getByLabelText(/Filter by title/i)
    const locationInput = getByLabelText(/Filter by location/i)
    const button = getByRole('button', { name: /search/i })

    const { search, location } = buildUserForm()

    userEvent.type(searchInput, search)
    userEvent.type(locationInput, location)

    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith({
      search,
      location
    })
  })
})
