export default function useBuildQuery(formValues = {}) {
  const CORS_PROXY = 'https://cors.bridged.cc/'
  const BASE_URL = `${CORS_PROXY}https://jobs.github.com/positions.json`

  const buildQuery = [
    `${BASE_URL}?`,
    formValues.search && `&search=${formValues.search}`,
    formValues.location && `&location=${formValues.location}`,
    formValues.fullTime && `&full_time=on`,
    formValues.pages && `&pages=${formValues.pages}`
  ]
    .join('')
    .trim()

  return buildQuery
}
