import { render, fireEvent } from '../../../test/test-utils'
import DesktopSearchbar from './index'

describe('Desktop Searchbar tests', () => {
  test('should initially have empty string value for search input', () => {
    const { getByLabelText } = render(<DesktopSearchbar />)
    const input = getByLabelText('Filter by title, companies, expertise...')
    expect(input.value).toEqual('')
  })

  test('should change value after search input event is triggered', () => {
    const { getByLabelText } = render(<DesktopSearchbar />)
    const input = getByLabelText('Filter by title, companies, expertise...')
    expect(input.value).toEqual('')
    fireEvent.change(input, { target: { value: 'javascript' } })
    expect(input.value).toEqual('javascript')
  })

  test('should initially have empty string value for location input', () => {
    const { getByLabelText } = render(<DesktopSearchbar />)
    const input = getByLabelText('Filter by location...')
    expect(input.value).toEqual('')
  })

  test('should change value after location input event is triggered', () => {
    const { getByLabelText } = render(<DesktopSearchbar />)
    const input = getByLabelText('Filter by location...')
    expect(input.value).toEqual('')
    fireEvent.change(input, { target: { value: 'New York' } })
    expect(input.value).toEqual('New York')
  })

  test('should toggle checkbox from false to true', () => {
    const { getByLabelText } = render(<DesktopSearchbar />)
    const input = getByLabelText('Full time only')
    expect(input.checked).toBeFalsy()
    fireEvent.input(input, { target: { checked: true } })
    expect(input.checked).toBeTruthy()
  })
})
