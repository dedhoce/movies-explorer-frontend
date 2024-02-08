import { useEffect, useState } from 'react';
import './SearchForm.css';

export default function SearchForm({setIsShortMovies, isShortMovies, setResultSearch, resultSearch }) {
  
  function handleFilterToogle(e) {
    e.preventDefault()
    isShortMovies ? setIsShortMovies(false) : setIsShortMovies(true);
  }
  const [value, setValue] = useState()

  useEffect(() => {
    resultSearch && setValue(resultSearch)
  },[resultSearch])

  function handleSearch(e) {
    setValue(e.target.value)
  }

  return (
    <form className="search-form">
      <input type="text" className="search-form__input" placeholder="Фильм" pattern='/^[а-яА-ЯёЁa-zA-Z0-9\ ]+$/v' value={value ? value : ''} onChange={handleSearch}/>
      <button onClick={(e) => {e.preventDefault(); setResultSearch(value)}} className="search-form__submit"></button>
      <div className="search-form__filter">
        <button
          onClick={handleFilterToogle}
          className={
            'search-form__filter-button' +
            (isShortMovies ? ' search-form__filter-button_active' : '')
          }
        ></button>
        <span className="search-form__filter-title">Короткометражки</span>
      </div>
    </form>
  );
}
