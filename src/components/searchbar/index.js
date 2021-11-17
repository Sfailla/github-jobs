import React from 'react'

import { SearchbarComponents as Search, DesktopSearchbar, MobileSearchbar } from './components'
import { useLayoutType } from '../../hooks'

function Searchbar({ handleSubmit, handleChange, handleCheck, checked, handleOpenModal }) {
  const { layout } = useLayoutType()

  return (
    <Search onSubmit={handleSubmit}>
      {layout === 'desktop' ? (
        <DesktopSearchbar {...{ handleCheck, handleChange, checked }} />
      ) : (
        <MobileSearchbar {...{ handleChange, handleOpenModal }} />
      )}
    </Search>
  )
}

export default Searchbar
