export default function useBuildQuery(values) {
  const BASE_URL = `https://api.adzuna.com/v1/api/jobs/us/search/${values?.page}?app_id=4a514151&app_key=cab9e5a8b0fb8a790eb7c91c5b037f92&results_per_page=20&content-type=application/json`

  const buildQuery = [
    `${BASE_URL}?`,
    values?.search && `&what=${encodeURIComponent(values?.search)}`
  ]
    .join('')
    .trim()

  return buildQuery
}
