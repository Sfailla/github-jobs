import React from 'react'
import { AppContextProvider } from '../../contexts'
import { screen, fireEvent, render } from '../../test/test-utils'
import Toggle from '../toggle/toggle'

describe('<Toggle /> component tests', () => {
  it('renders the <Toggle /> component', () => {
    const Wrapper = ({ children }) => <AppContextProvider>{children}</AppContextProvider>

    render(<Toggle />, { wrapper: Wrapper })
  })
})

describe('<Toggle.Switch /> component tests', () => {
  it('renders the <Toggle.Switch /> component', () => {
    render(<Toggle.Switch />)
  })

  it('toggles correctly', () => {
    const handleToggle = jest.fn()
    render(<Toggle.Switch toggle={handleToggle} />)

    const toggleSwitch = screen.getByTestId('toggle-switch')
    const toggle = () => fireEvent.click(toggleSwitch)

    expect(handleToggle).not.toHaveBeenCalled()
    toggle()
    expect(handleToggle).toHaveBeenCalled()
    expect(handleToggle).toHaveBeenCalledTimes(1)
  })
})
