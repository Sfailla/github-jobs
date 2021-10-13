export default function useBuildQuery(values = {}) {
  const BASE_URL = `https://api.adzuna.com/v1/api/jobs/${values?.location || 'us'}/search/${
    values?.page || 1
  }?app_id=4a514151&app_key=cab9e5a8b0fb8a790eb7c91c5b037f92&results_per_page=20&content-type=application/json`

  const buildQuery = [
    `${BASE_URL}?`,
    values?.search && `&what=${encodeURIComponent(values?.search)}`
    // values?.full_time && `&full_time=on`,
  ]
    .join('')
    .trim()

  return buildQuery
}
