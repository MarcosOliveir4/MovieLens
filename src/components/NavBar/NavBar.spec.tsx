import { render, screen } from '@testing-library/react'
import NavBar from '.'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockPush
    }
  }
}))

describe('<NavBar />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    )
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render the heading', () => {
    const navbar = screen.getByTestId('navbar')
    expect(navbar).toMatchSnapshot()
  })

  it('should emit onSearch when form is submitted', async () => {
    const formInput = screen.getByTestId('navbar-form-input')
    const formButton = screen.getByTestId('navbar-form-button')

    await userEvent.type(formInput, 'Spirited Away')
    await userEvent.click(formButton)

    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith('/home?q=Spirited Away')
  })

  it('should redirect to the home when the logo is clicked on', async () => {
    const logo = screen.getByTestId('navbar-link-home')
    await userEvent.click(logo)
    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith('/home')
  })
})
