import { render } from '../../../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { buildSearchForm } from '../../../../test/helpers'
import DesktopSearchbar from './index'

describe('inputs should work correctly for desktop searchbar component', () => {
  const values = buildSearchForm()

  test('inputs should work correctly', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(
      <DesktopSearchbar values={values} handleChange={handleChange} />
    )

    const searchInput = getByLabelText(/Filter by title/i)
    const locationInput = getByLabelText(/Filter by location/i)

    userEvent.type(searchInput, values.search)
    userEvent.type(locationInput, values.location)

    expect(handleChange).toHaveBeenCalled()
    expect(searchInput).toHaveValue(values.search)
    expect(locationInput).toHaveValue(values.location)
  })

  test('should correctly toggle checkbox', () => {
    const handleCheck = jest.fn()
    const handleChange = jest.fn()
    const { getByRole } = render(
      <DesktopSearchbar values={values} handleCheck={handleCheck} handleChange={handleChange} />
    )
    const checkbox = getByRole('checkbox')

    expect(checkbox).not.toBeChecked()

    userEvent.click(checkbox)
    expect(handleCheck).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked()
  })

  test('should have submit button', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<DesktopSearchbar values={values} handleChange={handleChange} />)
    const button = getByRole('button', { name: /search/i })
    expect(button).toBeInTheDocument()
  })
})
