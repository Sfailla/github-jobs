import { render, fireEvent } from '../../../test/test-utils'

import DesktopSearchbar from './index'
import { SearchbarComponents as Searchbar } from '../components'

describe('inputs should work correctly for desktop searchbar component', () => {
  test('search input should start with empty string and change value after onChange event', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<DesktopSearchbar handleChange={handleChange} />)
    const searchInput = getByLabelText('Filter by title, companies, expertise...')

    expect(searchInput.value).toEqual('')

    fireEvent.change(searchInput, { target: { value: 'javascript' } })

    expect(handleChange).toHaveBeenCalled()
    expect(searchInput.value).toEqual('javascript')
  })

  test('location input should start with empty string and change value after onChange event', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<DesktopSearchbar handleChange={handleChange} />)
    const locationInput = getByLabelText('Filter by location...')

    expect(locationInput.value).toEqual('')

    fireEvent.change(locationInput, { target: { value: 'New York' } })

    expect(handleChange).toHaveBeenCalled()
    expect(locationInput.value).toEqual('New York')
  })
})

describe('desktop checkbox and button should work correctly', () => {
  test('should correctly toggle checkbox', () => {
    const handleCheck = jest.fn()
    const { getByRole } = render(<DesktopSearchbar handleCheck={handleCheck} />)
    const checkbox = getByRole('checkbox')

    expect(checkbox.checked).toBeFalsy()
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(handleCheck).toHaveBeenCalledTimes(1)
    expect(checkbox).toBeChecked()
    expect(checkbox.checked).toBeTruthy()
  })

  test('submit button should be in the document', () => {
    const { getByText } = render(<DesktopSearchbar />)
    const button = getByText('Search')

    expect(button).toBeInTheDocument()
  })

  test('submit button should trigger onSubmit function in parent component', () => {
    const handleSubmit = jest.fn(e => e.preventDefault())
    const { getByText } = render(
      <Searchbar onSubmit={handleSubmit}>
        <DesktopSearchbar />
      </Searchbar>
    )
    const button = getByText('Search')
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
