import React from 'react'

import Searchbar from '../../components/searchbar'
import validate from './validateJobSearch'
import { useFormValidation, useWindowSize } from '../../hooks'
import { Container, GridContainer, Backdrop, Loading, Message } from './style'
import { InfoCard as Card } from '../../components/cards'
import { LayoutWrapper } from '../../styles/shared'
import SearchbarModal from '../../components/searchbar/components/modal'
import useModal from '../../components/searchbar/components/modal/useModal'

function JobSearch({ jobData, setUpdateQuery, isLoading }) {
  const [checked, setChecked] = React.useState(false)
  const initialData = { search: '', location: '' }

  const { values, handleChange, handleSubmit } = useFormValidation(
    initialData,
    validate,
    submitRequest,
    { resetOnSubmit: true }
  )

  const { open, handleOpenModal, handleCloseModal } = useModal()
  const { width } = useWindowSize()

  React.useEffect(() => {
    if (width > 768) handleCloseModal()
  }, [width, handleCloseModal])

  function handleCheck() {
    setChecked(checked => !checked)
  }

  function submitRequest() {
    if (open) handleCloseModal()
    setUpdateQuery(prevState => ({
      ...prevState,
      search: values.search,
      location: values.location,
      fullTime: checked,
      page: 1
    }))
  }

  return (
    <Container $open={open}>
      <LayoutWrapper>
        <Searchbar
          {...{ values, handleChange, handleSubmit, handleCheck, checked, handleOpenModal }}
        />
        {isLoading ? (
          <Loading>please wait while we load your data...</Loading>
        ) : (
          <GridContainer $open={open}>
            {jobData?.results?.length > 0 ? (
              jobData.results.map(data => <Card key={data.id} data={data} />)
            ) : (
              <Message>Sorry no results were found 😕. Please try searching another job!</Message>
            )}
          </GridContainer>
        )}
      </LayoutWrapper>
      {open && <Backdrop onClick={handleCloseModal} />}
      <SearchbarModal {...{ open, values, handleChange, handleSubmit, handleCheck, checked }} />
    </Container>
  )
}

export default React.memo(JobSearch)
