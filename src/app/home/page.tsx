'use client'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { getTopRatedMovies, TopRatedMovies } from '@/services'
import MovieCard from '@/components/MovieCard'

export default function Home() {
  const [topMovies, setTopMovies] = useState<TopRatedMovies>()
  useEffect(() => {
    getTopRatedMovies().then((e) => {
      setTopMovies(e)
    })
  }, [])
  return (
    <S.Container>
      <S.Title>Melhores filmes:</S.Title>
      <S.MovieContainer>
        {topMovies?.results.length &&
          topMovies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </S.MovieContainer>
    </S.Container>
  )
}
