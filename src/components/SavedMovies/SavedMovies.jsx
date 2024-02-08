import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import ButtonStill from '../Movies/ButtonStill/ButtonStill';
import Preloader from '../../vendor/Preloader/Preloader';
import { useState, useEffect } from 'react';
import { useWindowDimensions } from '../../utils/hoocks/useWindowDimensions';

export default function SavedMovies({
  handleMovieDelete,
  savedMovies,
  isNotFoundSavedMovies,
  isPreloader,
}) {
  const { width } = useWindowDimensions();
  // колличество отображаемых видео
  const [visibleMovies, setVisibleMovies] = useState();
  // колличество видео, добавляемых кнопкой "Еще"
  const [visibleMoviesStill, setVisibleMoviesStill] = useState();
  // активность кнопки "Еще", зависит от сравнения отрисованных видео с колличеством видео в объекте
  const [isActiveButtonStill, setIsActiveButtonStill] = useState(true);
  // состояние кнопки фильтрации "короткометражки"
  const [isShortMovies, setIsShortMovies] = useState(false);

  const [resultSearch, setResultSearch] = useState('');

  const [resultSearchedMovies, setResultSearchedMovies] = useState([]);

  function handleShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  function searchMoviesByWord() {
    const english = /^[A-Za-z0-9]*$/;
    return savedMovies.filter((movie) => {
      if (english.test(resultSearch)) {
        return movie.nameEN.toLowerCase().includes(resultSearch.toLowerCase());
      }
      return movie.nameRU.toLowerCase().includes(resultSearch.toLowerCase());
    });
  }

  // useEffect(() => {
  //   if(resultSearchedMovies.lenght === 0) {
      
  //   }
  // },[])

  // useEffect(() => {
  //   if (resultSearch && isShortMovies) {
  //     setResultSearchedMovies(handleShortMovies(resultSearchedMovies));
  //     return;
  //   }
  //   if (isShortMovies) {
  //     setResultSearchedMovies(handleShortMovies(savedMovies));
  //     return;
  //   }
  //   if (resultSearch) {
  //     setResultSearchedMovies(searchMoviesByWord);
  //     return;
  //   }
  // }, [resultSearch, isShortMovies]);

  // useEffect(() => {
  //   localStorage.getItem('resultSearch') &&
  //     setResultSearch(localStorage.getItem('resultSearch'));
  //   localStorage.getItem('isShortMovies') &&
  //     setIsShortMovies(localStorage.getItem('isShortMovies'));
  //   localStorage.getItem('resultSearchedMovies') &&
  //     setResultSearchedMovies(
  //       JSON.parse(localStorage.getItem('resultSearchedMovies'))
  //     );
  // }, []);

  // useEffect(() => {
  //   if (!resultSearch) {
  //     localStorage.removeItem('resultSearch');
  //   } else {
  //     localStorage.setItem('resultSearch', resultSearch);
  //   }
  // }, [resultSearch]);

  // useEffect(() => {
  //   if (!isShortMovies) {
  //     localStorage.removeItem('isShortMovies');
  //   } else {
  //     localStorage.setItem('isShortMovies', isShortMovies);
  //   }
  // }, [isShortMovies]);

  // useEffect(() => {
  //   resultSearchedMovies.length > 0 &&
  //     localStorage.setItem(
  //       'resultSearchedMovies',
  //       JSON.stringify(resultSearchedMovies)
  //     );
  // }, [resultSearchedMovies]);

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
        setIsShortMovies={setIsShortMovies}
        isShortMovies={isShortMovies}
        setResultSearch={setResultSearch}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          savedMovies={savedMovies}
          isDelete={true} /* флаг для изменения кнопки видео карточки */
          handleMovieDelete={handleMovieDelete}
          moreMarginBottom
          visibleMovies={visibleMovies}
          visibleMoviesStill={visibleMoviesStill}
          setIsActiveButtonStill={setIsActiveButtonStill}
          errorText='Сохраненые видео не найдены'
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
