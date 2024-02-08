import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonStill from './ButtonStill/ButtonStill';
import Preloader from '../../vendor/Preloader/Preloader';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../utils/hoocks/useWindowDimensions';
import { useSearchByForm } from '../../utils/hoocks/useSearchByForm'

export default function Movies({ movies, handleAddMovie, isPreloader, isNotLoadMovies }) {
  const { width } = useWindowDimensions();
  // колличество отображаемых видео
  const [visibleMovies, setVisibleMovies] = useState(0);
  // колличество видео, добавляемых кнопкой "Еще"
  const [visibleMoviesStill, setVisibleMoviesStill] = useState(0);
  // активность кнопки "Еще", зависит от сравнения отрисованных видео с колличеством видео в объекте
  const [isActiveButtonStill, setIsActiveButtonStill] = useState(true);  

  const { setResultSearch, setIsActiveFilter, arrResultSearchMovies, resultSearch, isActiveFilter } = useSearchByForm(movies)  

  useEffect(() => {
  if (visibleMovies >= arrResultSearchMovies.length) {
    console.log(visibleMovies)
    setIsActiveButtonStill(false);
  } else {setIsActiveButtonStill(true)}
  }, [visibleMovies, arrResultSearchMovies]);

  useEffect(() => {
    if (width < 500 && width >= 320) {
      setVisibleMovies(5);
      setVisibleMoviesStill(2);
    } else if (width <= 768 && width >= 500) {
      setVisibleMovies(8);
      setVisibleMoviesStill(3);
    } else {
      setVisibleMovies(12);
      setVisibleMoviesStill(4);
    }
  }, [width]);

  function handleVisibleMoviesStill() {
    setVisibleMovies(visibleMovies + visibleMoviesStill);
  }

  return (
    <>
      <SearchForm
        setIsShortMovies={setIsActiveFilter}
        isShortMovies={isActiveFilter}
        setResultSearch={setResultSearch}
        resultSearch={resultSearch}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={ arrResultSearchMovies }
          visibleMovies={visibleMovies}
          visibleMoviesStill={visibleMoviesStill}          
          handleAddMovie={handleAddMovie}
          errorText='Во время запроса произошла ошибка. Возможно проблема с соединением или сервер не доступен. Подождите немного и попробуйте еще раз'
          isError={isNotLoadMovies}
        />
      )}

      <ButtonStill
        onClick={handleVisibleMoviesStill}
        isActiveButtonStill={isActiveButtonStill}
      />
    </>
  );
}
