import SearchForm from './SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonStill from './ButtonStill/ButtonStill';
import Footer from '../Footer/Footer';

import { constantMovies } from '../../constants/constantMovies';

export default function Movies({ isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} />
      <SearchForm />
      <MoviesCardList constantMovies={constantMovies} />
      <ButtonStill />
      <Footer />
    </>
  );
}
