import { renderHook, act } from '@testing-library/react-hooks'
import { fireEvent } from '../../test/test-utils'
import { useLayoutType } from '..'
import { Breakpoints } from '../../styles/shared'

/*
  jestDom window innerWidth and innerHeight default to:
      { 
        innerWidth: 1024,
        innerHeight: 768 
      }
*/

describe('tests for useLayoutType hook', () => {
  const { xs, sm, md } = Breakpoints

  beforeEach(() => {
    window.innerWidth = 1024
  })

  it('should render desktop layout if window size is greater then 768', () => {
    const { result } = renderHook(() => useLayoutType())
    expect(result.current.layout).not.toBe('tablet')
    expect(result.current.layout).not.toBe('mobile')
    expect(result.current.layout).toBe('desktop')
  })

  it('should render tablet layout if window size is between 576 and 768', () => {
    const { result } = renderHook(() => useLayoutType())
    act(() => {
      window.innerWidth = md
      fireEvent(window, new Event('resize'))
    })
    expect(result.current.layout).not.toBe('desktop')
    expect(result.current.layout).not.toBe('mobile')
    expect(result.current.layout).toBe('tablet')
  })

  it('should render mobile layout if window width is < 576', () => {
    const { result } = renderHook(() => useLayoutType())
    act(() => {
      window.innerWidth = sm - 1
      fireEvent(window, new Event('resize'))
    })
    expect(result.current.layout).not.toBe('desktop')
    expect(result.current.layout).not.toBe('tablet')
    expect(result.current.layout).toBe('mobile')
  })

  test('should resize and update layout accordingly', () => {
    const { result } = renderHook(() => useLayoutType())
    expect(result.current.layout).toBe('desktop')

    act(() => {
      window.innerWidth = md
      fireEvent(window, new Event('resize'))
    })

    expect(result.current.layout).toBe('tablet')

    act(() => {
      window.innerWidth = xs
      fireEvent(window, new Event('resize'))
    })

    expect(result.current.layout).toBe('mobile')
  })
})
