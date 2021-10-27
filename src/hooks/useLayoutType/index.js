import React from 'react'
import { Breakpoints } from '../../styles/shared'
import { useWindowSize } from '..'

export default function useLayoutType() {
  const [layout, setLayout] = React.useState('')

  const { width } = useWindowSize()
  const { sm, md } = Breakpoints

  const isMobile = width < sm
  const isTablet = width >= sm && width <= md
  const isDesktop = width > md

  const getLayoutSize = React.useMemo(() => {
    if (isDesktop) setLayout('desktop')
    if (isTablet) setLayout('tablet')
    if (isMobile) setLayout('mobile')
  }, [isDesktop, isTablet, isMobile, setLayout])

  React.useEffect(() => getLayoutSize, [getLayoutSize])

  return { layout, isMobile, isTablet, isDesktop }
}
