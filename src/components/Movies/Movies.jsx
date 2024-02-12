import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonStill from './ButtonStill/ButtonStill';
import Preloader from '../../vendor/Preloader/Preloader';
import { useSearchByForm } from '../../utils/hoocks/useSearchByForm';
import { useButtonStill } from '../../utils/hoocks/useButtonStill';
import { IsPreloaderContext } from '../../contexts/IsPreloaderContext';
import { useContext } from 'react';

export default function Movies({
  movies,
  handleAddMovie,  
  isNotLoadMovies,
  handleMovieDelete,
  arrIdSavedMovies
}) {  
  const isPreloader = useContext(IsPreloaderContext)
  
  const {
    setResultSearch,
    setIsActiveFilter,
    resultSearchedMovies,
    resultSearch,
    isActiveFilter,
  } = useSearchByForm(movies, 'movies');

  const {
    handleVisibleMoviesStill,
    isActiveButtonStill,
    visibleMovies,
    visibleMoviesStill,
  } = useButtonStill(resultSearchedMovies)

  return (
    <>
      <SearchForm
        setIsShortMovies={setIsActiveFilter}
        isShortMovies={isActiveFilter}
        setResultSearch={setResultSearch}
        resultSearch={resultSearch}
      />
      {isPreloader || movies.length === 0 ? (
        <Preloader />
      ) : ( 
        <MoviesCardList
          movies={resultSearchedMovies}
          visibleMovies={visibleMovies}
          visibleMoviesStill={visibleMoviesStill}
          handleAddMovie={handleAddMovie}
          handleMovieDelete={handleMovieDelete}
          errorText="Во время запроса произошла ошибка. Возможно проблема с соединением или сервер не доступен. Подождите немного и попробуйте еще раз"
          isError={isNotLoadMovies}
          arrIdSavedMovies={arrIdSavedMovies}
        />
      )}
      <ButtonStill
        onClick={handleVisibleMoviesStill}
        isActiveButtonStill={isActiveButtonStill}
      />
    </>
  );
}
