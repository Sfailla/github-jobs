import React from 'react'

// all the bad code committed

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length === 0)
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setSubmitted(false)
      } else {
        console.log('authentication error')
        setSubmitted(false)
      }
    }
  }, [errors, isSubmitting, values, authenticate])

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
