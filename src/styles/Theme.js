export const theme = {
  mixin: {
    flex: (justify = 'center', align = 'center', direction = 'row') => `
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `,
    absoluteCenter: () => `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    `
  },

  light: {
    background: {
      primary: '#F4F6F8',
      secondary: '#FFFFFF'
    },
    input: {
      text: '#19202D',
      checkbox: ' rgb(25, 32, 45, .1)'
    },
    button: {
      normal: 'rgba(89, 100, 224, .10)',
      hover: 'rgba(89, 100, 224, .35)'
    }
  },
  dark: {
    background: {
      primary: '#121721',
      secondary: '#19202D'
    },
    input: {
      text: '#FFFFFF',
      checkbox: 'rgba(255, 255, 255, .10)'
    },
    button: {
      normal: 'rgba(255, 255, 255, .10)',
      hover: 'rgba(255, 255, 255, .35)'
    }
  },

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
