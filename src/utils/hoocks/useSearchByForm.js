import { useEffect, useState } from 'react';

function useSearchByForm(movies) {
  // содержимое поисковой строки при сабмите элемента поиска
  const [resultSearch, setResultSearch] = useState(localStorage.getItem(`resultSearch`) || '');
  const [isActiveFilter, setIsActiveFilter] = useState(localStorage.getItem(`isShortMovies`) || false);  
  const [resultSearchedMovies, setResultSearchedMovies] = useState(JSON.parse(localStorage.getItem(`resultSearchedMovies`)) || {});

  // запись результата поиска через эффект в стэйт
  const [arrResultSearchMovies, setArrResultSearchMovies] = useState([]);  

  /**функция возвращает фильмы отсортированные по времени */
  function handleShortMovies(movies) {
    console.log(movies)
    return movies?.filter((movie) => movie.duration <= 40);
  }

  /**возвращает фильмы отсортированные по названию */
  function searchMoviesByWord(movies) {
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
    if (isActiveFilter === true && resultSearch.length > 0) {  
      console.log(1)    
      setResultSearchedMovies(searchMoviesByWord(handleShortMovies(movies)));
    }
    //поиск по фильтру
    if (isActiveFilter === true && (resultSearch.length === 0)) {      
      console.log(2)
      setResultSearchedMovies(handleShortMovies(movies));
    }
    //поиск по слову
    if (isActiveFilter === false && resultSearch.length > 0) {
      console.log(3)
      setResultSearchedMovies(searchMoviesByWord(movies));
    }
    //очистка итога поиска если нет ни слова, ни фильтра
    if (resultSearch.length === 0 && isActiveFilter === false) {
      setResultSearchedMovies(movies);
    }
  }, [resultSearch, isActiveFilter]);  

  /**Запись стейтов в LocalStorage */
  useEffect(() => {       
      localStorage.setItem(`resultSearch`, resultSearch);
      localStorage.setItem(`isShortMovies`, isActiveFilter);
      localStorage.setItem(
        `resultSearchedMovies`,
        JSON.stringify(resultSearchedMovies)
      )
  }, [resultSearch, isActiveFilter, resultSearchedMovies]);  

  useEffect(() => {        
    if (resultSearchedMovies?.length > 0) {      
      setArrResultSearchMovies(resultSearchedMovies);
    }
  }, [resultSearchedMovies]);

  return {    
    setResultSearch,
    setIsActiveFilter,    
    arrResultSearchMovies,
    resultSearch,
    isActiveFilter
  };
}

export { useSearchByForm };
