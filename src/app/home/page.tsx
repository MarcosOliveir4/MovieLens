'use client'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { getTopRatedMovies, TopRatedMovies } from '@/services'

export default function Home() {
  const [topMovies, setTopMovies] = useState<TopRatedMovies>()
  useEffect(() => {
    getTopRatedMovies().then((e) => {
      setTopMovies(e)
    })
  }, [])
  return (
    <S.Container className="container">
      <S.Title>Melhores filmes:</S.Title>
      <div className="movies-container">
        {topMovies?.results.length &&
          topMovies.results.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      </div>
    </S.Container>
  )
}
