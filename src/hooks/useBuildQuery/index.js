export default function useBuildQuery(values) {
  const APP_ID = process.env.REACT_APP_API_ID
  const APP_KEY = process.env.REACT_APP_API_KEY
  const CONTENT_TYPE = 'application/json'

  const BASE_URL = `https://api.adzuna.com/v1/api/jobs/us/search/${values?.page}`
  const BASE_QUERY = `?app_id=${APP_ID}&app_key=${APP_KEY}&content-type=${CONTENT_TYPE}&results_per_page=15`

  const buildQuery = [
    `${BASE_URL}${BASE_QUERY}`,
    values.search ? `&what=${encodeURIComponent(values?.search)}` : '',
    values.location ? `&where=${encodeURIComponent(values?.location)}` : '',
    values.fullTime ? `&full_time=1` : ''
  ]
    .join('')
    .trim()

  return buildQuery
}
