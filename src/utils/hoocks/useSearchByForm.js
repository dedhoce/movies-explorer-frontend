import { useEffect, useState } from 'react';

function useSearchByForm(movies, page) {
  // содержимое поисковой строки при сабмите элемента поиска
  const [resultSearch, setResultSearch] = useState(
    JSON.parse(localStorage.getItem(`${page}-resultSearch`)) || ''
  );
  const [isActiveFilter, setIsActiveFilter] = useState(
    JSON.parse(localStorage.getItem(`${page}-isShortMovies`)) || false
  );
  const [resultSearchedMovies, setResultSearchedMovies] = useState(
    JSON.parse(localStorage.getItem(`${page}-resultSearchedMovies`)) || []
  );

  /**функция возвращает фильмы отсортированные по времени */
  function handleShortMovies(movies) {
    return movies?.filter((movie) => movie.duration <= 40);
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
      console.log(1);
      setResultSearchedMovies(searchMoviesByWord(handleShortMovies(movies)));
    }
    //поиск по фильтру
    if (isActiveFilter === true && resultSearch.length === 0) {
      console.log(2);
      setResultSearchedMovies(handleShortMovies(movies));
    }
    //поиск по слову
    if (isActiveFilter === false && resultSearch.length > 0) {
      console.log(3);
      setResultSearchedMovies(searchMoviesByWord(movies));
    }
    //очистка итога поиска если нет ни слова, ни фильтра
    if (resultSearch.length === 0 && isActiveFilter === false) {
      console.log(4);
      setResultSearchedMovies(movies);
    }
  }, [resultSearch, isActiveFilter]);

  /**Запись стейтов в LocalStorage */
  useEffect(() => {
    localStorage.setItem(`${page}-resultSearch`, JSON.stringify(resultSearch));
    localStorage.setItem(
      `${page}-isShortMovies`,
      JSON.stringify(isActiveFilter)
    );
    localStorage.setItem(
      `${page}-resultSearchedMovies`,
      JSON.stringify(resultSearchedMovies)
    );
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
