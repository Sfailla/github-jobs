import React from 'react'
import Header from './header'
import Toggle from '../toggle'
import { LayoutWrapper } from '../../styles/shared'
import { HeaderContent } from './style'
import { useWindowSize, useLayoutType } from '../../hooks'

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg'
import desktop from '../../assets/desktop/bg-pattern-header.svg'
import tablet from '../../assets/tablet/bg-pattern-header.svg'
import mobile from '../../assets/mobile/bg-pattern-header.svg'

export default function HeaderContainer() {
  const { width } = useWindowSize()
  const { layout } = useLayoutType(width)

  const handleSvgBackgroundSrc = React.useMemo(() => {
    const sources = { desktop, tablet, mobile }
    return sources[layout]
  }, [layout])

  return (
    <Header $src={handleSvgBackgroundSrc}>
      <LayoutWrapper>
        <HeaderContent>
          <Logo width={115} height={32} alt="logo" />
          <Toggle />
        </HeaderContent>
      </LayoutWrapper>
    </Header>
  )
}
