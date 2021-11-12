// import { renderHook, act } from '@testing-library/react-hooks'
import { renderHook, act } from '@testing-library/react-hooks'
import { buildSearchForm } from '../../test/helpers'
import useFormValidation from '.'

describe('useFormValidation tests', () => {
  test('should accept initial-values', async () => {
    const initialState = { search: '', location: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    expect(result.current.values).toEqual(initialState)
  })

  test('handleChange fn should update state correctly', async () => {
    const { search, location } = buildSearchForm()
    const { result } = renderHook(() => useFormValidation({ search: '', location: '' }))
    // simulate the values normally coming from the input
    const eventArray = [
      { name: 'search', value: 'Javascript' },
      { name: 'location', value: 'New York' }
    ]

    act(() => {
      eventArray.forEach(({ name, value }) => {
        const event = {
          persist: jest.fn(),
          target: { name, value }
        }
        // simulate event object and pass input values to onChange handler
        result.current.handleChange(event)
      })
    })

    expect(result.current.values).toEqual({
      search,
      location
    })
  })

  test('should update isSubmitting state when form is submitted without errors', () => {
    const initialState = buildSearchForm()
    const authenticate = jest.fn()
    const { result, waitForNextUpdate } = renderHook(() =>
      useFormValidation(initialState, () => ({}), authenticate)
    )

    const event = { preventDefault: jest.fn() }

    expect(result.current.isSubmitting).toBeFalsy()

    act(() => result.current.handleSubmit(event))

    waitForNextUpdate(() => {
      expect(result.current.isSubmitting).toBeTruthy()
    })

    expect(authenticate).toHaveBeenCalledTimes(1)
    expect(result.current.isSubmitting).toBeFalsy()
  })

  test('should show error if submitted without form values', () => {
    function testValidation(values) {
      let error = {}
      if (!values.search) {
        error.search = 'search field cannot be empty'
      }
      return error
    }

    const { result, waitForNextUpdate } = renderHook(() =>
      useFormValidation({ search: '' }, testValidation)
    )
    const event = { preventDefault: jest.fn() }

    expect(result.current.errors).toEqual({})
    expect(result.current.isSubmitting).toBeFalsy()

    act(() => result.current.handleSubmit(event))
    waitForNextUpdate(() => expect(result.current.isSubmitting).toBeTruthy())

    expect(result.current.errors).toEqual({
      search: 'search field cannot be empty'
    })
    waitForNextUpdate(() => expect(result.current.isSubmitting).toBeTruthy())
  })
})
