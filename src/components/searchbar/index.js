import React from 'react'
import { SearchbarComponents as Search } from './components'
import DesktopSearchbar from './desktop'
import MobileSearchbar from './mobile'

import { useWindowSize } from '../../hooks'

function Searchbar({ handleSubmit, handleChange }) {
  const [checked, setChecked] = React.useState(false)
  const { width } = useWindowSize()

  const handleCheck = () => setChecked(checked => !checked)

  return (
    <Search onSubmit={handleSubmit}>
      {width > 768 ? (
        <DesktopSearchbar {...{ handleCheck, handleChange, checked }} />
      ) : (
        <MobileSearchbar {...{ handleChange }} />
      )}
    </Search>
  )
}

export default Searchbar
