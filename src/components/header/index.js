import React from 'react'
import Header from './header'
import Toggle from '../toggle'
import { LayoutWrapper } from '../../styles/shared'
import { HeaderContent } from './headerStyles'
import { useWindowSize, useResponsiveBgImg } from '../../hooks'
import Searchbar from '../searchbar'

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg'

export default function HeaderContainer() {
  const { width } = useWindowSize()
  const { src } = useResponsiveBgImg(width)

  return (
    <Header $src={src}>
      <LayoutWrapper>
        <HeaderContent>
          <Logo width={115} height={32} alt="logo" />
          <Toggle />
        </HeaderContent>
        <Searchbar />
      </LayoutWrapper>
    </Header>
  )
}
