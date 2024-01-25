import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
// import Preloader from '../../vendor/Preloader/Preloader'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Layout } from '../Layout';

export default function App() {
  const isLogin = true;
  return (
    <div className="content">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="movies" element={<Movies isLogin={isLogin} />} />
          <Route
            path="saved-movies"
            element={<SavedMovies isLogin={isLogin} />} />
          <Route path="profile" element={<Profile />} />
        </Route>        
        <Route path="/*" element={<PageNotFound />} />        
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        
      </Routes>
    </div>
  );
}
