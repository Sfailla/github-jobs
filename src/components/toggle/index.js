import React from 'react'
import Toggle from './toggle'
import { SunIcon, MoonIcon } from '../../icons'

export default function ToggleContainer() {
  return (
    <Toggle>
      <Toggle.Label>
        {({ on }) => (
          <SunIcon style={{ color: on ? 'white' : 'gold' }} width={20} height={18} />
        )}
      </Toggle.Label>
      <Toggle.Button />
      <Toggle.Label>
        {({ on }) => (
          <MoonIcon style={{ color: on ? 'gold' : 'white' }} width={12} height={12} />
        )}
      </Toggle.Label>
    </Toggle>
  )
}
