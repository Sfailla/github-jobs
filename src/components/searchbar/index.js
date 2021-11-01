import React from 'react'

import { SearchbarComponents as Search, DesktopSearchbar, MobileSearchbar } from './components'
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
