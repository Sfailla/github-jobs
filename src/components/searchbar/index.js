import React from 'react'
import { SearchbarComponents as Searchbar } from './components'
import DesktopSearchbar from './desktop'
import MobileSearchbar from './mobile'

import { useWindowSize } from '../../hooks'

function SearchbarContainer({ handleSubmit, handleChange, setChecked, checked }) {
  const { width } = useWindowSize()

  const handleCheck = React.useCallback(() => setChecked(checked => !checked), [setChecked])

  return (
    <Searchbar onSubmit={handleSubmit}>
      {width > 768 ? (
        <DesktopSearchbar {...{ handleCheck, handleChange, checked }} />
      ) : (
        <MobileSearchbar {...{ handleChange }} />
      )}
    </Searchbar>
  )
}

export default SearchbarContainer
