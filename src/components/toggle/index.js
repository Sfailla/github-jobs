import React from 'react'
import Toggle from './toggle'
import { AppContext } from '../../contexts'
import { SunIcon, MoonIcon } from '../../icons'

export default function ToggleContainer() {
  const [toggle, setToggle] = React.useState(false)
  const { setMode } = React.useContext(AppContext)

  const handleToggle = () => setToggle(toggle => !toggle)

  React.useEffect(() => setMode(toggle ? 'dark' : 'light'), [setMode, toggle])

  return (
    <Toggle>
      <SunIcon width={20} height={18} />
      <Toggle.Switch {...{ toggle, onClick: handleToggle }} />
      <MoonIcon width={12} height={12} />
    </Toggle>
  )
}
