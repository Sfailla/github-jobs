import React from 'react'
import Header from './header'
import Toggle from '../toggle'
import { LayoutWrapper } from '../../styles/shared'
import { Container } from './headerStyles'
import useWindowSize from '../../hooks/useWindowSize'
import { responsiveImg } from '../../utils/responsiveImg'
import Searchbar from '../searchbar'

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg'
import desktopBG from '../../assets/desktop/bg-pattern-header.svg'
import tabletBG from '../../assets/tablet/bg-pattern-header.svg'
import mobileBG from '../../assets/mobile/bg-pattern-header.svg'

export default function HeaderContainer({ onChange, checked, children }) {
  const { width } = useWindowSize()
  const images = [desktopBG, tabletBG, mobileBG]

  return (
    <Header src={responsiveImg(width, images)}>
      <LayoutWrapper>
        <Container>
          <Logo width={115} height={32} alt="logo" />
          <Toggle />
        </Container>
        <Searchbar {...{ onChange, checked }} />
      </LayoutWrapper>
    </Header>
  )
}
