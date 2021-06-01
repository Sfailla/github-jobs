export default function validate(values) {
  let errors

  if (!values.search) {
    const message = 'must provide a value to search for!'
    errors.search = message
  }

  return errors
}
