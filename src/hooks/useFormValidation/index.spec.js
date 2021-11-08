// import { renderHook, act } from '@testing-library/react-hooks'
import { renderHook, act } from '../../test/test-utils'
import { buildSearchForm } from '../../test/helpers'
import useFormValidation from '.'

describe('useFormValidation should work correctly', () => {
  test('should accept initial-values', async () => {
    const initialState = { search: '', location: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    expect(result.current.values).toEqual(initialState)
  })

  test('handleChange fn should update state correctly', async () => {
    const initialState = { search: '', location: '' }
    const { result, waitFor } = renderHook(() => useFormValidation(initialState))

    const arr = [
      { name: 'search', value: 'Javascript' },
      { name: 'location', value: 'NY' }
    ]

    // const event = (name, value) => ({
    //   event: {
    //     persist: jest.fn(),
    //     target: {
    //       name,
    //       value
    //     }
    //   }
    // })

    // // console.log('results -> ', event('search', 'javascript'))

    // act(() => {
    //   arr.forEach(({ name, value }) => {
    //     event.target.name = name
    //     event.target.value = value

    //     result.current.handleChange()
    //   })
    // })

    const event = {
      target: {
        name: 'search',
        value: 'Javascript'
      }
    }

    act(() => {
      result.current.handleChange(event)
    })

    await waitFor(() => {
      console.log(result.current.values)

      expect(result.current.values.search).toEqual('Javascript')
    })
  })
})
