import styled, { css } from 'styled-components'

// Layout and global Variables
export const headerHeight = '16rem'
export const searchbarHeight = '8rem'

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 111rem;
  margin: 0 auto;
  position: relative;
`

// Design System for Project
export const DesignSystem = {
  colors: {
    primary: {
      violet: '#9E7F66',
      lightviolet: '#939Bf4',
      darkblue: '#19202D',
      deepblue: '#5964E0',
      midnight: '#121721'
    },
    secondary: {
      white: '#FFFFFF',
      lightgrey: '#F4F6F8',
      grey: '#9DAEC2',
      darkgrey: '#6E8098'
    },
    button: {
      normal: '#5964E0',
      hover: '#939BF4'
    }
  },
  typography: {
    h1: '28px',
    h2: '24px',
    h3: '20px',
    h4: '14px'
  }
}

// Set Breakpoints for Responsive Layout
export const SCREEN_SIZES = {
  mobile_sm: 375,
  mobile: 550,
  tablet_sm: 700,
  tablet: 768,
  tablet_lg: 992,
  desktop: 1440
}

export const media = Object.keys(SCREEN_SIZES).reduce((accumulator, label) => {
  const emSize = SCREEN_SIZES[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
