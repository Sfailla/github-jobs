import { cleanup, render } from '../../test/test-utils'
import App from './App'

afterEach(cleanup)

test('renders <App /> component', () => {
  render(<App />)
  // expect(true).toBeTruthy()
})
