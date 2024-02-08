import { useEffect, useState } from 'react';

function useSearchByForm() {
  const [page, setPage] = useState('');
  // содержимое поисковой строки при сабмите элемента поиска
  const [resultSearch, setResultSearch] = useState({});
  const [isActiveFilter, setIsActiveFilter] = useState({});
  const [movies, setMovies] = useState([]);
  const [resultSearchedMovies, setResultSearchedMovies] = useState({});
  // запись результата поиска через эффект в стэйт
  const [arrResultSearchMovies, setArrResultSearchMovies] = useState([]);
  /**функция записи данных в стэйты */
  function writeDataState(resultSearch, isActiveFilter) {
    setResultSearch({ ...resultSearch, [page]: resultSearch });
    setIsActiveFilter({ ...isActiveFilter, [page]: isActiveFilter });
  }

  /**функция возвращает фильмы отсортированные по времени */
  function handleShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }
  /**возвращает фильмы отсортированные по названию */
  function searchMoviesByWord() {
    const english = /^[A-Za-z0-9]*$/;
    return movies.filter((movie) => {
      if (english.test(resultSearch)) {
        return movie.nameEN.toLowerCase().includes(resultSearch.toLowerCase());
      }
      return movie.nameRU.toLowerCase().includes(resultSearch.toLowerCase());
    });
  }
  /**регулярная проверка и запись результата поиска в стэйт resultSearchedMovies*/
  useEffect(() => {
    //включение фильтра при найденных фильмах по слову
    if (resultSearch[page] && isActiveFilter[page]) {
      setResultSearchedMovies({
        ...resultSearchedMovies,
        [page]: handleShortMovies(resultSearchedMovies),
      });
    }
    //поиск по фильтру
    if (isActiveFilter[page] && !resultSearch[page]) {
      setResultSearchedMovies({
        ...resultSearchedMovies,
        [page]: handleShortMovies(movies),
      });
    }
    //поиск по слову
    if (!isActiveFilter[page] && resultSearch[page]) {
      setResultSearchedMovies({
        ...resultSearchedMovies,
        [page]: searchMoviesByWord,
      });
    }
    //очистка итога поиска если нет ни слова, ни фильтра
    if (!resultSearch[page] && !isActiveFilter[page]) {
      setResultSearchedMovies({ ...resultSearchedMovies, [page]: [] });
    }
  }, [resultSearch[page], isActiveFilter[page]]);

  /**получение записей из LocalStorage по наличию */
  useEffect(() => {
    if(localStorage.getItem(`${page}-resultSearch`)) {
      setResultSearch({
        ...resultSearch,
        [page]: localStorage.getItem(`${page}-resultSearch`),
      })
    } else {
      setResultSearch({ ...resultSearch, [page]: '' });
    }
    if(localStorage.getItem(`${page}-isShortMovies`)) {
      setIsActiveFilter({
        ...isActiveFilter,
        [page]: localStorage.getItem(`${page}-isShortMovies`),
      })
    } else {
      setIsActiveFilter({ ...isActiveFilter, [page]: false });
    }
    if(localStorage.getItem(`${page}-resultSearchedMovies`)) {
      setResultSearchedMovies({
        ...resultSearchedMovies,
        [page]: JSON.parse(
          localStorage.getItem(`${page}-resultSearchedMovies`)
        ),
      })
    } else {
      setResultSearchedMovies({ ...resultSearchedMovies, [page]: [] });
    }
  }, []);

  /**Запись стейтов в LocalStorage */

  useEffect(() => {
    if (!resultSearch[page] && localStorage.getItem(`${page}-resultSearch`)) {
      localStorage.removeItem(`${page}-resultSearch`);
    } else {
      localStorage.setItem(`${page}-resultSearch`, resultSearch[page]);
    }
  }, [resultSearch]);

  useEffect(() => {
    if (!isActiveFilter[page] && localStorage.getItem(`${page}-isShortMovies`)) {
      localStorage.removeItem(`${page}-isShortMovies`);
    } else {
      localStorage.setItem(`${page}-isShortMovies`, isActiveFilter[page]);
    }
  }, [isActiveFilter, localStorage.getItem(`${page}-isShortMovies`)]);

  useEffect(() => {
    resultSearchedMovies[page]?.length > 0 && !localStorage.getItem(`${page}-resultSearchedMovies`)
      ? localStorage.setItem(
          `${page}-resultSearchedMovies`,
          JSON.stringify(resultSearchedMovies[page])
        )
      : localStorage.removeItem(`${page}-resultSearchedMovies`);
  }, [resultSearchedMovies]);

  useEffect(() => {        
    if (resultSearchedMovies[page]?.length > 0) {      
      setArrResultSearchMovies(resultSearchedMovies[page]);
    } else {
      setArrResultSearchMovies(movies);
    }
  }, [resultSearchedMovies]);

  return {
    setPage,
    writeDataState,
    setMovies,
    arrResultSearchMovies
  };
}

export { useSearchByForm };
