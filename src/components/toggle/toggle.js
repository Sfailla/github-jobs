import React from 'react'
import { Container, Switch, Slider } from './toggleStyles'

export default function Toggle({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

Toggle.Switch = function ToggleSwitch({ toggle, handleToggle, ...props }) {
  return (
    <Switch {...props}>
      <Slider {...{ toggle }} />
    </Switch>
  )
}
