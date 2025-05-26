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
  // Храним состояния
  const [query, setQuery] = useState(''); // Что ввёл пользователь
  const [movies, setMovies] = useState<Movie[]>([]); // Список фильмов
  const [isLoading, setIsLoading] = useState(false); // Спинер
  const [IsError, setIsError] = useState(null); // Ошибка или нет
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // Какой фильм выбран (для модального окна)

  useEffect(() => {
    if (!query) return; // Если запрос пустой, ничего не делать, а если нет то

    // инициализируем функцию загрузки фильмов
    const loadItems = async () => {
      try {
        setIsLoading(true);
        setIsError(null);

        const data = await getMovies(query); // Запрашиваем фильмы с сервера через movieService

        if (data.results.length === 0) {
          toast('No movies found for your request.');
        }

        setMovies(data.results); // Сохраняем список фильмов
      } catch {
        // ошибка ПРИ ЗАПРОСЕ
        
        toast.error('Failed to fetch movies.');
      } finally {
        setIsLoading(false); // Скрываем загрузку в любом случае
      }
    };

    // вызиваем функцию загрузки
    loadItems();
  }, [query]); // зависимость: когда изменится query

  // Обработчик поиска (вызывается при нажатии кнопки "поиск")
  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === '') {
      toast('Please enter your search query.'); // Предупреждение, если строка пустая
      return;
    }
    setQuery(newQuery); // Сохраняем новый запрос (меняет состояние query, потому что у setQuery есть доступ к query)
    setMovies([]); // Очищаем старые фильмы
    setIsError(null); // Сбрасываем ошибки
  };

   // Выбор фильма (для открытия модалки)
   const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie); // Устанавливаем выбранный фильм
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setSelectedMovie(null); // Убираем выбранный фильм
  };

  return (
    <>
      <div className={styles.app}>
        <Toaster position="top-center" />
        <SearchBar onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {IsError && <ErrorMessage message={IsError} />}{' '}
        {!isLoading && !IsError && movies.length > 0 && (
          <MovieGrid movies={movies} onSelect={handleSelect} />
        )}
        {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
      </div>
    </>
  );
}
