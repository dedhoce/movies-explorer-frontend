import { useEffect, useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({
  id,
  image,
  title,
  times,
  isDelete,
  handleAddMovie,
  movie,
  handleMovieDelete,
}) {
  const {
    country,
    director,
    duration,
    year,
    description,      
    trailerLink,       
    nameRU,
    nameEN,
  } = movie;

  const dataMovie = {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail: image, 
    movieId: id,
    nameRU,
    nameEN
  }

  function handleAddMovieData() {    
    handleAddMovie(dataMovie)
    setArrIdSavedMovies([id, ...arrIdSavedMovies])
  }
  
  const [arrIdSavedMovies, setArrIdSavedMovies] = useState([])

  useEffect(() => {
    setArrIdSavedMovies(JSON.parse(localStorage.getItem('savedMovies'))?.map((item) => item.movieId))
  }, [])  

  return (
    <div className="card">
      <a href={trailerLink}>
        <img
          className="card__image"        
          src={image}
          alt={`Картинка из фильма ${title}`}
        />
      </a>
      <div className="card__group">
        <h2 className="card__title">{title}</h2>
        {!isDelete ? (
          <button
            onClick={!arrIdSavedMovies?.includes(id) ? handleAddMovieData : undefined}
            className={
              'card__like' +
              (arrIdSavedMovies?.includes(id)
                ? ' card__like_active'
                : '')
            }
          ></button>
        ) : (
          <button
            onClick={() => handleMovieDelete(id)}
            className="card__like card__like_delete"
          ></button>
        )}
      </div>
      <span className="card__times">{times}</span>
    </div>
  );
}
