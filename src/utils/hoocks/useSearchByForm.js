import { useEffect, useState } from "react";
import { DURATION_SHORT_MOVIE } from "../../constants/durationShortMovie";

function useSearchByForm(movies, page) {
  // содержимое поисковой строки при сабмите элемента поиска
  const [resultSearch, setResultSearch] = useState(
    JSON.parse(page && localStorage.getItem(`${page}-resultSearch`)) || ""
  );
  const [isActiveFilter, setIsActiveFilter] = useState(
    JSON.parse(page && localStorage.getItem(`${page}-isShortMovies`)) || false
  );
  const [resultSearchedMovies, setResultSearchedMovies] = useState(
    JSON.parse(page && localStorage.getItem(`${page}-resultSearchedMovies`)) || []
  );

  /**функция возвращает фильмы отсортированные по времени */
  function handleShortMovies(movies) {
    return movies?.filter((movie) => movie.duration <= DURATION_SHORT_MOVIE);
  }

  /**возвращает фильмы отсортированные по названию */
  function searchMoviesByWord(movies) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(resultSearch.toLowerCase());
    });
  }

  /**регулярная проверка и запись результата поиска в стэйт resultSearchedMovies*/
  useEffect(() => {
    //включение фильтра при найденных фильмах по слову
    if (isActiveFilter === true && resultSearch.length > 0) {
      setResultSearchedMovies(searchMoviesByWord(handleShortMovies(movies)));
    }
    //поиск по фильтру
    if (isActiveFilter === true && resultSearch.length === 0) {
      setResultSearchedMovies(handleShortMovies(movies));
    }
    //поиск по слову
    if (isActiveFilter === false && resultSearch.length > 0) {
      setResultSearchedMovies(searchMoviesByWord(movies));
    }
    //очистка итога поиска если нет ни слова, ни фильтра
    if (resultSearch.length === 0 && isActiveFilter === false) {
      setResultSearchedMovies(movies);
    }
  }, [resultSearch, isActiveFilter, movies]);

  /**Запись стейтов в LocalStorage */
  useEffect(() => {
    if(page) {
      localStorage.setItem(`${page}-resultSearch`, JSON.stringify(resultSearch));
      localStorage.setItem(
        `${page}-isShortMovies`,
        JSON.stringify(isActiveFilter)
      );
      localStorage.setItem(
        `${page}-resultSearchedMovies`,
        JSON.stringify(resultSearchedMovies)
      );
    }    
  }, [resultSearch, isActiveFilter, resultSearchedMovies]);

  return {
    setResultSearch,
    setIsActiveFilter,
    resultSearchedMovies,
    resultSearch,
    isActiveFilter,
  };
}

export { useSearchByForm };
