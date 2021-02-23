import React from 'react';
import Header from './header';
import ToggleSwitch from '../toggle';
import { LayoutWrapper } from '../../styles/shared';
import useWindowSize from '../../hooks/useWindowSize';
import { responsiveImg } from '../../utils/responsiveImg';
import Searchbar from '../searchbar';

import logo from '../../assets/desktop/logo.svg';
import desktopBG from '../../assets/desktop/bg-pattern-header.svg';
import tabletBG from '../../assets/tablet/bg-pattern-header.svg';
import mobileBG from '../../assets/mobile/bg-pattern-header.svg';

function HeaderSection({ onChange, checked, children }) {
  const { width } = useWindowSize();
  const images = [desktopBG, tabletBG, mobileBG];

  return (
    <Header src={responsiveImg(width, images)} position="left">
      <LayoutWrapper relative>
        <Header.Container>
          <Header.Logo src={logo} alt="logo-svg" />
          <ToggleSwitch />
        </Header.Container>
        <Searchbar onChange={onChange} checked={checked} />
        {children}
      </LayoutWrapper>
    </Header>
  );
}

export default HeaderSection;
