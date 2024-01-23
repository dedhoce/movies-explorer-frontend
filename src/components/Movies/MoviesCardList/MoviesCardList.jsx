import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useWindowDimensions } from '../../../utils/hoocks/useWindowDimensions';

export default function MoviesCardList({
  constantMovies,
  isDelete,
  isSavedMovies,
}) {
  const { width } = useWindowDimensions();
  const time = (width < 500 && width >= 320) ? 5 : (width <= 768 && width >= 500) ? 8 : 12;

  return (
    <div className="card-list">
      {constantMovies.map(({ image, title, times }, i) => {
        if (i < time) {                        
          return (
            <MoviesCard
              key={title}
              image={image}
              title={title}
              times={times}
              isDelete={isDelete}
              isSavedMovies={isSavedMovies}
            />
          );
        }
        return
      })}
    </div>
  );
}
