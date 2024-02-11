import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import ButtonStill from '../Movies/ButtonStill/ButtonStill';
import Preloader from '../../vendor/Preloader/Preloader';
import { useSearchByForm } from '../../utils/hoocks/useSearchByForm';
import { useButtonStill } from '../../utils/hoocks/useButtonStill';
import { useContext } from 'react';
import { IsPreloaderContext } from '../../contexts/IsPreloaderContext';

export default function SavedMovies({
  handleMovieDelete,
  savedMovies,
  isNotFoundSavedMovies  
}) {
  const isPreloader = useContext(IsPreloaderContext)
  const {
    setResultSearch,
    setIsActiveFilter,
    resultSearchedMovies,
    resultSearch,
    isActiveFilter,
  } = useSearchByForm(savedMovies, 'saved-movies');

  const {
    handleVisibleMoviesStill,
    isActiveButtonStill,
    visibleMovies,
    visibleMoviesStill,
  } = useButtonStill(resultSearchedMovies);
  return (
    <>
      <SearchForm
        setIsShortMovies={setIsActiveFilter}
        isShortMovies={isActiveFilter}
        setResultSearch={setResultSearch}
        resultSearch={resultSearch}
      />
      {isPreloader && savedMovies.length === 0 ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={resultSearchedMovies}
          isDelete={true} /* флаг для изменения кнопки видео карточки */
          handleMovieDelete={handleMovieDelete}
          moreMarginBottom
          visibleMovies={visibleMovies}
          visibleMoviesStill={visibleMoviesStill}
          errorText="Сохраненые видео не найдены"
          isError={isNotFoundSavedMovies}
        />
      )}
      <ButtonStill
        onClick={handleVisibleMoviesStill}
        isActiveButtonStill={isActiveButtonStill}
      />
    </>
  );
}
