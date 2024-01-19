import { useState } from 'react';
import './MoviesCard.css';

export default function MoviesCard({ image, title, times, isDelete}) {
  const [isSavedMovies, setIsSavedMovies] = useState(false)

  function handleToogleLike() {
    isSavedMovies ? setIsSavedMovies(false) : setIsSavedMovies(true)    
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={image}
        alt={`Картинка из фильма ${title}`}
      />
      <div className="card__group">
        <h2 className="card__title">{title}</h2>
        {!isDelete ? (
          <button onClick={handleToogleLike}
            className={'card__like' + (isSavedMovies ? ' card__like_active' : '')}
          ></button>
        ) : (
          <button className="card__like card__like_delete"></button>
        )}
      </div>
      <span className="card__times">{times}</span>
    </div>
  );
}
