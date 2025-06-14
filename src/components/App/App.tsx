import styles from './App.module.css';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import type { MovieApiResponse } from '../../services/movieService';


export default function App() {
  // State management
  const [query, setQuery] = useState(''); // User input query
  const [page, setPage] = useState(1); // List of pages
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // Selected movie for modal
  
  const { data, isError, isLoading, isSuccess } = useQuery<MovieApiResponse>({
    queryKey: ['movies', query, page],
    queryFn: () => getMovies(query, page),
    enabled: query !== '',
    placeholderData: keepPreviousData,
  });

  const handleSearchSubmit = (query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      toast.error('Please enter your search query.');
      return;
    }
    setQuery(trimmedQuery);
    setPage(1);
    setSelectedMovie(null);
  };
  const changePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const totalPages = data?.total_pages ?? 0;
  const movies = data?.results ?? [];
  const showMovies = !isLoading && !isError;

  // Select movie to show in modal
  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  // Close movie modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    if (isSuccess && movies.length === 0) {
      toast('Nothing found. Try again.', { icon: '🔍' });
    }
  }, [isSuccess, movies.length]);

  return (
    <div className={styles.app}>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearchSubmit} />

      {isSuccess && totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={changePage}
          forcePage={page - 1}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          nextLabel="→"
          previousLabel="←"     
        />
      )}

      {isLoading && <Loader />}
      {showMovies && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelect} />
      )}
      {isError && <ErrorMessage message="Something went wrong. Please try again." />}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </div>
  );
}
