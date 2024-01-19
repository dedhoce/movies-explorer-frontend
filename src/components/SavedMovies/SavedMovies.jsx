import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { constantSavedMovies } from '../../constants/constantMovies';

export default function SavedMovies({isLogin}) {
  return (
    <>
      <Header isLogin={isLogin} />
      <SearchForm />
      <MoviesCardList constantMovies={constantSavedMovies} isDelete={true} />
      <Footer />
    </>
  );
}
