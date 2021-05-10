import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    line-height: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, Kumbh Sans, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    transition: background .5s linear;
    position: relative;
  }

  html, body { width: 100%; height: 100%; };
  
  body > div { width: 100%; min-height: 100%; }

`
