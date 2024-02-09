import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import timeCalculation from '../../../utils/timeCalculation';
import { useEffect, useState } from 'react';

export default function MoviesCardList({
  isDelete,
  moreMarginBottom,
  movies,  
  handleAddMovie,
  visibleMovies,  
  handleMovieDelete,
  isError,
  errorText,
}) { 

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (movies?.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }    
  }, [movies]);
  
  return (
    <section
      className={`card-list ${
        moreMarginBottom ? 'card-list_more-margin-bottom' : ''
      }`}
    >
      {isError ? (
        <h2 className="card-list__error">{errorText}</h2>
      ) : isNotFound ? (
        <h2 className="card-list__error">Видео не найдены</h2>
      ) : (
        movies?.map((movie, i) => {
          const { id, _id, image, nameRU, nameEN, duration } = movie;

          if (i < visibleMovies) {
            return (
              <MoviesCard
                key={id ? id : _id}
                id={id ? id : _id}
                image={
                  image.url
                    ? `https://api.nomoreparties.co/${image.url}`
                    : image
                }
                title={nameRU ? nameRU : nameEN}
                times={timeCalculation(duration)}
                isDelete={isDelete}
                handleAddMovie={handleAddMovie}
                handleMovieDelete={handleMovieDelete}
                movie={movie}
              />
            );
          }
          return;
        })
      )}
    </section>
  );
}
