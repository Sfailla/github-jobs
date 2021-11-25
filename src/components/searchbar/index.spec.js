import { render, fireEvent, act } from '../../test/test-utils'
import userEvent from '@testing-library/user-event'
import Searchbar from '.'

describe('test for searchbar container component', () => {
  const values = {
    search: 'Javascript',
    location: 'NY'
  }
  test('submit button should trigger onSubmit handler', () => {
    const handleSubmit = jest.fn(event => event.preventDefault())
    const handleChange = jest.fn()
    const { getByRole } = render(
      <Searchbar values={values} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
    const button = getByRole('button', { name: /search/i })
    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  test('should render correct components based on window width', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<Searchbar values={values} handleChange={handleChange} />)
    const locationInput = getByLabelText(/filter by location/i)

    expect(locationInput).toBeInTheDocument()

    act(() => {
      // set viewport size
      window.innerWidth = 650
      window.innerHeight = 650
      fireEvent(window, new Event('resize'))
    })

    expect(locationInput).not.toBeInTheDocument()
  })
})
