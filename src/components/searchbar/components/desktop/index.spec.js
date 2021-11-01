import { render } from '../../../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { buildSearchForm } from '../../../../test/helpers'
import DesktopSearchbar from './index'

describe('inputs should work correctly for desktop searchbar component', () => {
  test('inputs should work correctly', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<DesktopSearchbar handleChange={handleChange} />)

    const searchInput = getByLabelText(/Filter by title/i)
    const locationInput = getByLabelText(/Filter by location/i)

    const { search, location } = buildSearchForm()

    userEvent.type(searchInput, search)
    userEvent.type(locationInput, location)

    expect(handleChange).toHaveBeenCalled()
    expect(searchInput).toHaveValue(search)
    expect(locationInput).toHaveValue(location)
  })

  test('should correctly toggle checkbox', () => {
    const handleCheck = jest.fn()
    const { getByRole } = render(<DesktopSearchbar handleCheck={handleCheck} />)
    const checkbox = getByRole('checkbox')

    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)

    expect(handleCheck).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked()
  })

  test('should have submit button', () => {
    const { getByRole } = render(<DesktopSearchbar />)
    const button = getByRole('button', { name: /search/i })
    expect(button).toBeInTheDocument()
  })
})
