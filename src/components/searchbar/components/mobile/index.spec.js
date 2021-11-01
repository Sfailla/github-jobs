import { render } from '../../../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { buildSearchForm } from '../../../../test/helpers'
import MobileSearchbar from './index'

describe('inputs should work correctly for mobile searchbar component', () => {
  test('inputs should work correctly', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<MobileSearchbar handleChange={handleChange} />)
    const input = getByRole('textbox', { name: 'Filter by title, companies, expertise...' })
    const { search } = buildSearchForm()

    userEvent.type(input, search)

    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue(search)
  })

  test('submit button should be in the document', () => {
    const { getByRole } = render(<MobileSearchbar />)
    const searchButton = getByRole('button', { name: 'icon-search.svg' })
    expect(searchButton).toBeInTheDocument()
  })

  test('filter button should be in the document', () => {
    const { getByRole } = render(<MobileSearchbar />)
    const filterButton = getByRole('button', { name: 'icon-filter.svg' })
    expect(filterButton).toBeInTheDocument()
  })
})
