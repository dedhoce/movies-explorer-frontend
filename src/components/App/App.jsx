import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
// import Preloader from '../../vendor/Preloader/Preloader'
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Layout } from '../Layout';
import ProfileForm from '../ProfileForm/ProfileForm';

export default function App() {
  
  return (
    <div className="content">
      <Routes>
        <Route path='/' element={<Layout />}> {/* для перехода в залогиненый header передать props в Layout isLogin={true}*/}
          <Route path="" element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="saved-movies"
            element={<SavedMovies />} />
          <Route path="profile" element={<ProfileForm />} />                 
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} /> 
        </Route>               
      </Routes>
    </div>
  );
}
