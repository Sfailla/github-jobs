import React from 'react'
import { SearchbarComponents as Search } from './components'
import DesktopSearchbar from './desktop'
import MobileSearchbar from './mobile'

import { useLayoutType } from '../../hooks'

function Searchbar({ handleSubmit, handleChange, handleCheck, checked }) {
  const { layout } = useLayoutType()

  return (
    <Search onSubmit={handleSubmit}>
      {layout === 'desktop' ? (
        <DesktopSearchbar {...{ handleCheck, handleChange, checked }} />
      ) : (
        <MobileSearchbar {...{ handleChange }} />
      )}
    </Search>
  )
}

export default Searchbar
