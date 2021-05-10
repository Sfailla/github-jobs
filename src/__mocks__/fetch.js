export function mockFetch() {
  return Promise.resolve({
    json: data => Promise.resolve(data),
    error: error => Promise.reject(error)
  })
}
