import React from 'react'
import Toggle from '../toggle'

import { SunIcon, MoonIcon } from '../../assets/icons'
import { Background } from './style'
import { LayoutWrapper } from '../../styles/shared'
import { HeaderContent } from './style'
import { useLayoutType } from '../../hooks'

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg'
import desktop from '../../assets/desktop/bg-pattern-header.svg'
import tablet from '../../assets/tablet/bg-pattern-header.svg'
import mobile from '../../assets/mobile/bg-pattern-header.svg'

export default function Header() {
  const { layout } = useLayoutType()

  const handleSvgBackgroundSrc = React.useMemo(() => {
    const sources = { desktop, tablet, mobile }
    return sources[layout]
  }, [layout])

  return (
    <Background $src={handleSvgBackgroundSrc}>
      <LayoutWrapper>
        <HeaderContent>
          <Logo width={115} height={32} alt="logo" />
          <Toggle>
            <Toggle.Label>
              {({ on }) => <SunIcon fill={on ? 'white' : 'gold'} width={20} height={19} />}
            </Toggle.Label>
            <Toggle.Button />
            <Toggle.Label>
              {({ on }) => <MoonIcon fill={on ? 'gold' : 'white'} width={13} height={13} />}
            </Toggle.Label>
          </Toggle>
        </HeaderContent>
      </LayoutWrapper>
    </Background>
  )
}
