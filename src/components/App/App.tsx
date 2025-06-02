import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';

import styles from './App.module.css';

export default function App() {
  // State management
  const [query, setQuery] = useState(''); // User input query
  const [movies, setMovies] = useState<Movie[]>([]); // List of movies
  const [isLoading, setIsLoading] = useState(false); // Loading spinner
  const [isError, setIsError] = useState(false); // Error state
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // Selected movie for modal

  useEffect(() => {
    if (!query) return;

    const loadMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMovies(query);

        if (data.results.length === 0) {
          toast('No movies found');
        }

        setMovies(data.results);
      } catch (error) {
        toast.error('Failed to fetch movies.');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [query]);

  // Handle form action from <SearchBar />
  const handleFormAction = (formData: FormData) => {
    const newQuery = (formData.get('query') as string)?.trim();

    if (!newQuery) {
      toast.error('Please enter your search query.');
      return;
    }

    setQuery(newQuery);
    setMovies([]);
    setIsError(false);
  };

  // Select movie to show in modal
  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  // Close movie modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={styles.app}>
      <Toaster position="top-center" />
      <SearchBar action={handleFormAction} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Something went wrong. Please try again." />}
      {!isLoading && !isError && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelect} />
      )}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
}