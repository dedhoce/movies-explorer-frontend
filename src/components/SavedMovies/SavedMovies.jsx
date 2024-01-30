import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { constantSavedMovies } from '../../constants/constantMovies';

export default function SavedMovies() {
  return (
    <>      
      <SearchForm />
      <MoviesCardList constantMovies={constantSavedMovies} isDelete={true} moreMarginBottom/>      
    </>
  );
}
