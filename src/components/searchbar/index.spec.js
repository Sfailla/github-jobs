import { render } from '../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { SearchbarComponents as Search, DesktopSearchbar, MobileSearchbar } from './components'

// jest.mock('../../../hooks', () => ({
//   useFormValidation: initialState => ({
//     values: initialState,
//     handleSubmit: jest.fn()
//   })
// }))

describe('integration test for searchbar components', () => {
  test('submit button should trigger onSubmit function in parent component', () => {
    const handleSubmit = jest.fn(event => event.preventDefault())

    const { getByRole } = render(
      <Search onSubmit={handleSubmit}>
        <DesktopSearchbar />
      </Search>
    )

    const button = getByRole('button', { name: /search/i })
    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
