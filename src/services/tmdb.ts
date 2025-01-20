import { api } from './axios-instance'
import { Movie, TopRatedMovies } from '@/services/tmdb.models'

const getTopRatedMovies = async () => {
  try {
    const { data } = await api.get<TopRatedMovies>('movie/top_rated')
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const searchMovies = async (query: string) => {
  try {
    const { data } = await api.get<TopRatedMovies>('search/movie', {
      params: {
        query
      }
    })
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const getMovie = async (id: string) => {
  try {
    const { data } = await api.get<Movie>(`movie/${id}`)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export { getTopRatedMovies, searchMovies, getMovie }
