import { FaStar } from 'react-icons/fa'

import * as S from './styles'
import { Movie } from '@/services'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface MovieCardInterface {
  movie: Movie
}

const imageUrl = process.env.NEXT_PUBLIC_API_URL_IMG

const MovieCard = ({ movie }: MovieCardInterface) => {
  const router = useRouter()

  return (
    <S.Wrapper data-testid="movie-card">
      <S.WrapperImg>
        <Image
          data-testid="movie-card-img"
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          overrideSrc={imageUrl + movie.poster_path}
        />
      </S.WrapperImg>
      <S.Title data-testid="movie-card-title">{movie.title}</S.Title>
      <S.VoteAverage data-testid="movie-card-vote-average">
        <FaStar data-testid="movie-card-vote-average-icon" />{' '}
        {movie.vote_average}
      </S.VoteAverage>
      <S.DetailsButton
        data-testid="movie-card-details-button"
        onClick={() => router.push(`/movie/${movie.id}`)}
      >
        Detalhes
      </S.DetailsButton>
    </S.Wrapper>
  )
}
export default MovieCard
