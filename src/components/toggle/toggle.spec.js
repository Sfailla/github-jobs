import React from 'react'
import { ThemeWrapper } from '../../test/test-utils'
import { render } from '@testing-library/react'
import Toggle from '../toggle/toggle'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/Theme'

it('renders the <Toggle /> component', () => {
  const component = (
    <ThemeProvider theme={{ theme, mode: 'light' }}>
      <Toggle />
    </ThemeProvider>
  )
  render(component)
})
