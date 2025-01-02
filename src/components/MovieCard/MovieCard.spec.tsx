import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import MovieCard from '.'
import { Movie } from '@/services'
import theme from '@/styles/theme'

const movieMock: Movie = {
  adult: false,
  backdrop_path: '/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg',
  genre_ids: [16, 10751, 14],
  id: 129,
  original_language: 'ja',
  original_title: '千と千尋の神隠し',
  overview:
    'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
  popularity: 103.603,
  poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
  release_date: '2001-07-20',
  title: 'Spirited Away',
  video: false,
  vote_average: 8.537,
  vote_count: 16633
}

const imageUrl = process.env.NEXT_PUBLIC_API_URL_IMG

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: mockPush
    }
  }
}))

describe('<MovieCard />', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MovieCard movie={movieMock} />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the component', async () => {
    const container = screen.getByTestId('movie-card')
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render img correct', () => {
    const img = screen.getByTestId('movie-card-img')
    expect(img).toHaveAttribute('src', imageUrl + movieMock.poster_path)
    expect(img).toHaveAttribute('alt', movieMock.title)
  })

  it('should render title correct', () => {
    const title = screen.getByTestId('movie-card-title')
    expect(title).toHaveTextContent(movieMock.title)
  })

  it('should render vote average correct', () => {
    const voteAverage = screen.getByTestId('movie-card-vote-average')
    const voteAverageIcon = screen.getByTestId('movie-card-vote-average-icon')

    expect(voteAverage).toHaveTextContent(movieMock.vote_average.toString())
    expect(voteAverageIcon).toBeInTheDocument()
  })

  it('should render and emitter action details button correct', async () => {
    const detailsButton = screen.getByTestId('movie-card-details-button')
    expect(detailsButton).toBeInTheDocument()

    await userEvent.click(detailsButton)
    expect(mockPush).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith(`/movie/${movieMock.id}`)
  })
})
