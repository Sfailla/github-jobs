import React from 'react'
import Toggle from './toggle'

import { ReactComponent as Sun } from '../../assets/desktop/icon-sun.svg'
import { ReactComponent as Moon } from '../../assets/desktop/icon-moon.svg'
import { AppContext } from '../../contexts'

export default function ToggleSwitch() {
  const [toggle, setToggle] = React.useState(false)
  const { setMode } = React.useContext(AppContext)

  const handleToggle = () => setToggle(toggle => !toggle)

  React.useEffect(() => setMode(toggle ? 'dark' : 'light'), [setMode, toggle])

  return (
    <Toggle>
      <Sun width={20} height={18} />
      <Toggle.Switch {...{ toggle, handleToggle }} />
      <Moon width={12} height={12} />
    </Toggle>
  )
}
