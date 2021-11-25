import { render } from '../../../../test/test-utils'
import userEvent from '@testing-library/user-event'
import { buildSearchForm } from '../../../../test/helpers'
import MobileSearchbar from './index'

describe('inputs should work correctly for mobile searchbar component', () => {
  const values = buildSearchForm()
  const handleChange = jest.fn()

  test('inputs should work correctly', () => {
    const { getByRole } = render(<MobileSearchbar values={values} handleChange={handleChange} />)
    const input = getByRole('textbox', { name: 'Filter by title, companies, expertise...' })

    userEvent.type(input, values.search)

    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue(values.search)
  })

  test('submit button should be in the document', () => {
    const { getByRole } = render(<MobileSearchbar values={values} handleChange={handleChange} />)
    const searchButton = getByRole('button', { name: 'icon-search.svg' })
    expect(searchButton).toBeInTheDocument()
  })

  test('filter button should be in the document', () => {
    const { getByRole } = render(<MobileSearchbar values={values} handleChange={handleChange} />)
    const filterButton = getByRole('button', { name: 'icon-filter.svg' })
    expect(filterButton).toBeInTheDocument()
  })
})
