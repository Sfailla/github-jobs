import React from 'react'

function useFormValidation(initialState, validate, authenticate, { ...options } = {}) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitted] = React.useState(false)
  const { resetOnSubmit } = options

  const handleFormSubmit = React.useCallback(async () => {
    try {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setSubmitted(false)

        if (resetOnSubmit) {
          setValues(initialState)
        }
      }
    } catch (error) {
      console.log(error)
      throw new Error('error in useFormValidation hook submission', error)
    } finally {
      setSubmitted(false)
    }
  }, [authenticate, errors, initialState, resetOnSubmit])

  React.useEffect(() => {
    if (isSubmitting) {
      handleFormSubmit()
    }
  }, [errors, isSubmitting, values, authenticate, handleFormSubmit])

  function handleChange(event) {
    event.persist()
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validateErrors = validate(values)
    setErrors(validateErrors)
    setSubmitted(true)
  }

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    values
  }
}

export default useFormValidation
