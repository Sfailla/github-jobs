import { render, fireEvent } from '../../../test/test-utils'

import MobileSearchbar from './index'
import { SearchbarComponents as Searchbar } from '../components'

describe('text inputs should work correctly', () => {
  test('should change from empty string to text value after onChange event', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<MobileSearchbar handleChange={handleChange} />)
    const input = getByLabelText('Filter by title, companies, expertise...')

    expect(input.value).toEqual('')

    fireEvent.change(input, { target: { value: 'javascript' } })

    expect(handleChange).toHaveBeenCalled()
    expect(input.value).toEqual('javascript')
  })
})

describe('submit button should work correctly in mobile searchbar component', () => {
  test('submit button should be in the document', () => {
    const { getByRole } = render(<MobileSearchbar />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('submit button should trigger onSubmit', () => {
    const handleSubmit = jest.fn(e => e.preventDefault())
    const { getByRole } = render(
      <Searchbar onSubmit={handleSubmit}>
        <MobileSearchbar />
      </Searchbar>
    )
    const button = getByRole('button')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
