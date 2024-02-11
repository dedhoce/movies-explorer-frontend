import { useEffect, useState } from "react";
import "./MoviesCard.css";

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

  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    if(arrIdSavedMovies?.includes(id)) {
      console.log(1)
      setIsLike(true)
    } else {
      console.log(2)
      setIsLike(false)
    }      
    console.log(arrIdSavedMovies)  
  },[arrIdSavedMovies])
  

  function handleDeleteByIdSavedMovie() {
    JSON.parse(localStorage.getItem("savedMovies")).forEach((movie) => {
      if (movie.movieId === id) {
        handleMovieDelete(movie._id);                
      }
    });
  }
  
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
            type="button"
            onClick={
              !isLike
                ? () => handleAddMovie(dataMovie)
                : handleDeleteByIdSavedMovie
            }
            className={
              "card__like" +
              (isLike ? " card__like_active" : "")
            }
          ></button>
        ) : (
          <button
            type="button"
            onClick={() => handleMovieDelete(id)}
            className="card__like card__like_delete"
          ></button>
        )}
      </div>
      <span className="card__times">{times}</span>
    </div>
  );
}
