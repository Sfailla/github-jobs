export default function useBuildQuery(formValues = {}, page = null) {
  const CORS_PROXY = 'https://cors.bridged.cc/'
  const BASE_URL = `${CORS_PROXY}https://jobs.github.com/positions.json`

  const buildQuery = [
    `${BASE_URL}?`,
    formValues?.search && `&search=${encodeURIComponent(formValues?.search)}`,
    formValues?.location && `&location=${encodeURIComponent(formValues?.location)}`,
    formValues?.full_time && `&full_time=on`,
    page && `&page=${page}`
  ]
    .join('')
    .trim()

  return buildQuery
}
