import axios from 'axios';
import { MovieApiResponse  } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;


export const getMovies = async (
  query: string,
  page: number
): Promise<MovieApiResponse> => {
  try {
    const response = await axios.get<MovieApiResponse>(BASE_URL, {
      params: { query, page },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies from TMDB API.');
  }
};