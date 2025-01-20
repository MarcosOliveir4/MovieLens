'use client'

import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import {
  BsFillFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2
} from 'react-icons/bs'
import { IconType } from 'react-icons'

import * as S from './styles'
import MovieCard from '@/components/MovieCard'
import { getMovie, Movie as MovieInterface } from '@/services'

interface MovieProps {
  params: Promise<{ id: string }>
}

export default function Movie({ params }: MovieProps) {
  const { id } = React.use(params)
  const [movie, setMovie] = useState<MovieInterface>()

  if (!id) {
    redirect('/home')
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  useEffect(() => {
    if (id) {
      getMovie(id).then((movie) => {
        setMovie(movie)
      })
      return
    }
  }, [id])

  return (
    <S.MovieSection>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <S.MovieInfo>
            <MovieInfo
              title="Orçamento"
              value={formatCurrency(movie.budget)}
              Icon={BsWallet2}
            />
            <MovieInfo
              title="Receita"
              value={formatCurrency(movie.revenue)}
              Icon={BsGraphUp}
            />
            <MovieInfo
              title="Duração"
              value={movie.runtime + ' minutos'}
              Icon={BsHourglassSplit}
            />
            <MovieInfo
              title="Descrição"
              value={movie.overview}
              Icon={BsFillFileEarmarkTextFill}
            />
          </S.MovieInfo>
        </>
      )}
    </S.MovieSection>
  )
}
interface MovieInfoProps {
  title: string
  value: string | number
  Icon: IconType
}
function MovieInfo({ title, Icon, value }: MovieInfoProps) {
  return (
    <S.MovieInfoSection>
      <h3>
        {' '}
        <Icon /> {title}
      </h3>
      <p>{value}</p>
    </S.MovieInfoSection>
  )
}
