import React from 'react'

import desktopBG from '../assets/desktop/bg-pattern-header.svg'
import tabletBG from '../assets/tablet/bg-pattern-header.svg'
import mobileBG from '../assets/mobile/bg-pattern-header.svg'

export default function useResponsiveBgImg(width) {
  const [src, setSrc] = React.useState()

  const isMobileWidth = width < 375
  const isTabletWidth = width >= 375 && width < 768
  const isDesktopWidth = width >= 768

  const setResponsiveSrc = React.useMemo(() => {
    if (isDesktopWidth) setSrc(desktopBG)
    if (isTabletWidth) setSrc(tabletBG)
    if (isMobileWidth) setSrc(mobileBG)
  }, [isDesktopWidth, isTabletWidth, isMobileWidth])

  React.useEffect(() => setResponsiveSrc, [setResponsiveSrc])

  return { src }
}
