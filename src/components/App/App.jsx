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

export default function App() {
  const isLogin = true;
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/movies" element={<Movies isLogin={isLogin} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLogin={isLogin} />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} />} />
      </Routes>
    </div>
  );
}
