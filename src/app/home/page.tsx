'use client'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { getTopRatedMovies, searchMovies, TopRatedMovies } from '@/services'
import MovieCard from '@/components/MovieCard'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  const [topMovies, setTopMovies] = useState<TopRatedMovies>()
  useEffect(() => {
    if (search) {
      searchMovies(search).then((e) => {
        setTopMovies(e)
      })
      return
    }
    getTopRatedMovies().then((e) => {
      setTopMovies(e)
    })
  }, [search])
  return (
    <S.Container>
      <S.Title>
        {' '}
        {search ? (
          <>
            Resultados para: <span>{search}</span>
          </>
        ) : (
          'Melhores filmes:'
        )}
      </S.Title>
      <S.MovieContainer>
        {topMovies?.results.length &&
          topMovies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showDetails={true} />
          ))}
      </S.MovieContainer>
    </S.Container>
  )
}
