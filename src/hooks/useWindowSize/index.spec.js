import { fireEvent } from '../../test/test-utils'
import { renderHook, act } from '@testing-library/react-hooks'
import { useWindowSize } from '../index'

describe('tests for useWindowSize hook', () => {
  it('should render with default window values', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)
  })

  it('should simulate window resize with new window values', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      // set viewport size
      window.innerWidth = 500
      window.innerHeight = 500
      fireEvent(window, new Event('resize'))
    })

    expect(result.current.width).toBe(500)
    expect(result.current.height).toBe(500)
  })
})
