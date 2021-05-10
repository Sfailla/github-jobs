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
  color: {
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
export const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const media = Object.keys(Breakpoints).reduce((accumulator, label) => {
  const mediaSize = Breakpoints[label]

  accumulator[label] = (...args) => css`
    @media all and (max-width: ${mediaSize}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
