import React from 'react'
import { Breakpoints } from '../../styles/shared'

export default function useLayoutType(width) {
  const [layout, setLayout] = React.useState('')
  const { sm, md } = Breakpoints

  const isMobile = width < sm
  const isTablet = width >= sm && width < md
  const isDesktop = width >= md

  React.useEffect(() => {
    if (isDesktop) setLayout('desktop')
    if (isTablet) setLayout('tablet')
    if (isMobile) setLayout('mobile')
  }, [isDesktop, isTablet, isMobile, setLayout])

  return { layout }
}
