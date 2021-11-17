import React from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)
  return {
    open: isOpen,
    handleOpenModal,
    handleCloseModal
  }
}
