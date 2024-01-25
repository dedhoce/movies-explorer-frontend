import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonStill from './ButtonStill/ButtonStill';
import { constantMovies } from '../../constants/constantMovies';

export default function Movies({ isLogin }) {
  return (
    <>      
      <SearchForm />
      <MoviesCardList constantMovies={constantMovies} />
      <ButtonStill />      
    </>
  );
}
