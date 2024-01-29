import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useWindowDimensions } from '../../../utils/hoocks/useWindowDimensions';

export default function MoviesCardList({
  constantMovies,
  isDelete,
  isSavedMovies,
  moreMarginBottom
}) {
  const { width } = useWindowDimensions();
  const time = (width < 500 && width >= 320) ? 5 : (width <= 768 && width >= 500) ? 8 : 12;

  return (
    <section className={`card-list ${moreMarginBottom ? 'card-list_more-margin-bottom' : ''}`}>
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
    </section>
  );
}
