import { renderHook } from '@testing-library/react-hooks'
import { useLayoutType } from '..'
import { Breakpoints } from '../../styles/shared'

describe('tests for useLayoutType hook', () => {
  const { xs, sm, md } = Breakpoints

  it('should render desktop layout if breakpoint width is >= md', () => {
    const { result } = renderHook(() => useLayoutType(md))

    expect(result.current.layout).toBe('desktop')
  })

  it('should not render desktop layout if breakpoint is not >= md', () => {
    const { result } = renderHook(() => useLayoutType(sm))

    expect(result.current.layout).not.toBe('desktop')
  })

  it('should render tablet layout if breakpoint width is >= sm and < md', () => {
    const { result } = renderHook(() => useLayoutType(sm))

    expect(result.current.layout).toBe('tablet')
  })

  it('should not render tablet layout if breakpoint width is not >= sm and <= md', () => {
    const { result } = renderHook(() => useLayoutType(xs))

    expect(result.current.layout).not.toBe('tablet')
  })

  it('should render mobile layout if breakpoint width is < sm', () => {
    const { result } = renderHook(() => useLayoutType(xs))

    expect(result.current.layout).toBe('mobile')
  })

  it('should not render mobile layout if breakpoint width is not < sm', () => {
    const { result } = renderHook(() => useLayoutType(md))

    expect(result.current.layout).not.toBe('mobile')
  })
})
