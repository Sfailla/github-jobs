import React from 'react'
import { AppContext } from '../../contexts'
import { Container, Switch, Slider, Label } from './style'

export const ToggleContext = React.createContext()

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const { setMode } = React.useContext(AppContext)

  const toggle = () => setOn(on => !on)

  React.useEffect(() => setMode(on ? 'dark' : 'light'), [setMode, on])

  const value = React.useMemo(() => ({ on, toggle }), [on])

  return (
    <ToggleContext.Provider value={value}>
      <Container>{children}</Container>
    </ToggleContext.Provider>
  )
}

function On({ children }) {
  const { on } = React.useContext(ToggleContext)
  return on ? children : null
}

function Off({ children }) {
  const { on } = React.useContext(ToggleContext)
  return on ? null : children
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

Toggle.On = On
Toggle.Off = Off
Toggle.Label = ToggleLabel
Toggle.Button = Button
Toggle.Switch = ToggleSwitch

export default Toggle
