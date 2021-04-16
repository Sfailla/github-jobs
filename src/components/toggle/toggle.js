import React from 'react'
import { Container, Switch, Slider } from './toggleStyles'

export default function Toggle({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>
}

Toggle.Switch = function ToggleSwitch({ toggle, ...otherProps }) {
  return (
    <Switch {...otherProps}>
      <Slider {...{ toggle }} />
    </Switch>
  )
}
