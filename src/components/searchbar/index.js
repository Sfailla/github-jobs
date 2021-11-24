import React from 'react'

import { SearchbarComponents as Search, DesktopSearchbar, MobileSearchbar } from './components'
import { useLayoutType } from '../../hooks'

function Searchbar({ values, handleSubmit, handleChange, handleCheck, checked, handleOpenModal }) {
  const { layout } = useLayoutType()

  return (
    <Search onSubmit={handleSubmit}>
      {layout === 'desktop' ? (
        <DesktopSearchbar {...{ values, handleCheck, handleChange, checked }} />
      ) : (
        <MobileSearchbar {...{ values, handleChange, handleOpenModal }} />
      )}
    </Search>
  )
}

export default Searchbar
