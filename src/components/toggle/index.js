import React from 'react'
import { useAppContext } from '../../contexts'
import { Container, Switch, Slider, Label } from './style'

export const ToggleContext = React.createContext()

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const { setMode } = useAppContext()

  const toggle = () => setOn(on => !on)

  React.useMemo(() => setMode(on ? 'dark' : 'light'), [on, setMode])

  const value = React.useMemo(() => ({ on, toggle }), [on])

  return (
    <ToggleContext.Provider value={value}>
      <Container>{children}</Container>
    </ToggleContext.Provider>
  )
}

function ToggleLabel({ children }) {
  const { on } = React.useContext(ToggleContext)
  return <Label>{children({ on })}</Label>
}

function ToggleSwitch({ on, toggle }) {
  return (
    <Switch onClick={toggle} data-testid="toggle-switch">
      <Slider $on={on} />
    </Switch>
  )
}

function Button({ ...props }) {
  const { on, toggle } = React.useContext(ToggleContext)
  return <Toggle.Switch {...{ on, toggle }} {...props} />
}

Toggle.Label = ToggleLabel
Toggle.Button = Button
Toggle.Switch = ToggleSwitch

export default Toggle
