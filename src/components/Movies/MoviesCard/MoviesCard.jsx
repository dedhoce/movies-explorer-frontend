import { useContext, useEffect, useState } from 'react';
import './MoviesCard.css';
import { IsPreloaderContext } from '../../../contexts/IsPreloaderContext';

export default function MoviesCard({
  id,
  image,
  title,
  times,
  isDelete,
  movie,
  handleAddMovie,
  handleMovieDelete,
  arrIdSavedMovies,
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
    nameEN,
  };

  const isPreloader = useContext(IsPreloaderContext);

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (arrIdSavedMovies?.includes(id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [arrIdSavedMovies]);

  function handleDeleteByIdSavedMovie() {
    JSON.parse(localStorage.getItem('savedMovies')).forEach((movie) => {
      if (movie.movieId === id) {
        handleMovieDelete(movie._id);
      }
    });
  }

  return (
    <div className="card">
      <a href={trailerLink} target="_blank" rel="noreferrer">
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
            type="button"
            onClick={
              !isLike
                ? () => handleAddMovie(dataMovie)
                : handleDeleteByIdSavedMovie
            }
            className={'card__like' + (isLike ? ' card__like_active' : '')}
            disabled={isPreloader}
          ></button>
        ) : (
          <button
            type="button"
            onClick={() => handleMovieDelete(id)}
            className="card__like card__like_delete"
            disabled={isPreloader}
          ></button>
        )}
      </div>
      <span className="card__times">{times}</span>
    </div>
  );
}
