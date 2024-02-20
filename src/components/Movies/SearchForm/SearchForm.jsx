import { useEffect, useState } from 'react';
import './SearchForm.css';

export default function SearchForm({setIsShortMovies, isShortMovies, setResultSearch, resultSearch }) {
  
  const [value, setValue] = useState()

  useEffect(() => {
    resultSearch && setValue(resultSearch)
  },[resultSearch])

  function handleFilterToogle(e) {
    e.preventDefault()
    isShortMovies ? setIsShortMovies(false) : setIsShortMovies(true);
    setResultSearch(value ? value : '')
  } 

  function handleSearch(e) {
    setValue(e.target.value)
  }

  return (
    <form className="search-form">
      <input type="text" className="search-form__input" placeholder="Фильм" value={value ? value : ''} onChange={handleSearch}/>
      <button onClick={(e) => {e.preventDefault(); setResultSearch(value ? value : '')}} className="search-form__submit"></button>
      <div className="search-form__filter">
        <button
          onClick={handleFilterToogle}
          className={`search-form__filter-button ${isShortMovies ? ' search-form__filter-button_active' : ''}`}
        ></button>
        <span className="search-form__filter-title">Короткометражки</span>
      </div>
    </form>
  );
}
