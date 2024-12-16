import { api } from './axios-instance'
import { TopRatedMovies } from '@/services/tmdb.models'

const getTopRatedMovies = async () => {
  try {
    const { data } = await api.get<TopRatedMovies>('top_rated')
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export { getTopRatedMovies }
