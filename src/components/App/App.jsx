import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Layout } from '../Layout';
import ProfileForm from '../ProfileForm/ProfileForm';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import auth from '../../utils/auth';
import ProtectedRouteElement from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoggedInContext } from '../../contexts/LoggedInContext'

export default function App() {
  /* Глобальный стэйт с данными профиля пользователя. */
  const [currentUser, setCurrentUser] = useState({});
  /** Глобальный стэйт с объектом видео. */
  const [savedMovies, setSavedMovies] = useState([]);
  /** Глобальный стэйт с объектом сохраненых видео. */
  const [movies, setMovies] = useState([]);
  /** Стэйт авторизации пользователя. */
  const [loggedIn, setLoggedIn] = useState(false);

  /** стейт для элемента Сохраненые видео не найдены */
  const [isNotFoundSavedMovies, setIsNotFoundSavedMovies] = useState(false);

  /** стейт для отображения прелоадера на страницах  */
  const [isPreloader, setIsPreloader] = useState(false);
  
  /**Стэйт ошибки при загрузке видео */
  const [isNotLoadMovies, setIsNotLoadMovies] = useState(false);

  const location = useLocation();

  const handleLogin = () => {
    setLoggedIn(true);
    console.log('handleLogin');
  };

  /** использую регулярную проверку на наличии токена в хранилище, как толлько он устаревает или пропадает, то блочим аккаунт */
  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const localJWT = localStorage.getItem('jwt');
      callingBaseToServer({
        apiMetod: auth.checkUserToken(localJWT),
        thenCallback: (res) => {
          if (res) {
            setCurrentUser(res);
            handleLogin();
          }
        },
      });
    } else {
      navigate('/', { replace: true });
    }
  };

  /** при наличии в хранилище обновляем стэйты, при отсутсвии обновляем через запрос */
  useEffect(() => {
    if (localStorage.getItem('movies')) {
      //console.log(1);
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
    if (localStorage.getItem('savedMovies')) {
      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    }
    if (!localStorage.getItem('movies') && loggedIn) {
      getInitialSavedMovies();
    }
    if (!localStorage.getItem('savedMovies') && loggedIn) {
      getInitialSavedMovies();
    }
  }, []);

  /** Получаем данные пользователя с сервера по запросу и записываем ответы в глобальные стэйты. */
  useEffect(() => {
    loggedIn &&
    callingBaseToServer({
      apiMetod: mainApi.getUserInfo(localStorage.getItem('jwt')),
      thenCallback: (userInformation) => {
        setCurrentUser(userInformation);
      }
    });
  }, [loggedIn]);

  /** Получаем все видео с сервера по запросу и записываем ответы в localStorage. */
  function getInitialMovies() {
    setIsPreloader(true);
    callingBaseToServer({
      apiMetod: moviesApi.getInitialMovies(),
      thenCallback: (initialMovies) => {
        localStorage.setItem('movies', JSON.stringify(initialMovies));
        setIsNotLoadMovies(false);
      },
      finallyCallback: () => setIsPreloader(false),
    });
  }

  /** Получаем сохраненые видео с сервера по запросу и записываем ответы в localStorage. */
  function getInitialSavedMovies() {
    setIsPreloader(true);
    callingBaseToServer({
      apiMetod: mainApi.getInitialMovies(localStorage.getItem('jwt')),
      thenCallback: (initialSavedMovies) => {
        if (!initialSavedMovies) {
          setIsNotFoundSavedMovies(true);
          return;
        }
        setIsNotFoundSavedMovies(false);
        initialSavedMovies &&
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(initialSavedMovies)
          );
      },
      finallyCallback: () => setIsPreloader(false) 
    });    
  }
  
  /**Первая загрузка видео на странице видео */
  useEffect(() => {
    if (loggedIn && location.pathname === '/movies') {
      !localStorage.getItem('movies') && getInitialMovies();
      !localStorage.getItem('savedMovies') && getInitialSavedMovies();
    }
  }, [loggedIn, location.pathname]);

  /** Отправляем данные о пользователе на сервер, меняем подпись кнопки сабмита при загрузке,
   *  ответ с новыми данными записываем в глобальный стэйт. */
  function handleUpdateUser({ name, email }) {
    callingBaseToServer({
      apiMetod: mainApi.pushUserInfo(
        { name, email },
        localStorage.getItem('jwt')
      ),
      thenCallback: (userInformation) => {
        setCurrentUser(userInformation);
      },
    });
  }

  /** Отправляем данные для регимстрации пользователя, меняем подпись кнопки сабмита при загрузке,
   *  при положительном ответе переходим в окно входа. */
  const navigate = useNavigate();

  function handleRegisterUser({ name, email, password }) {
    console.log('handleRegisterUser');
    callingBaseToServer({
      apiMetod: auth.regisrationNewUser({ name, email, password }),
      thenCallback: (res) => {
        // res - объект с пользователем, поэтому проверяем через элемент этого обьекта _id
        if (!res._id) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        navigate('/', { replace: true });
      },
    });
  }
  /**  функция для входа в аккаунт, но так как входим по емайл и паролю нужно еще получить имя для отображения в окне
  профиля, следовательно использую useEffect с запросом на получение информации о пользователе */
  function handleEnterUser({ email, password }) {
    console.log('handleEnterUser');
    callingBaseToServer({
      apiMetod: auth.getUserToken({ email, password }),
      thenCallback: (res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleLogin();
          navigate('/', { replace: true });
        }
      },
    });
  }
  /**Функция выхода из аккаунта с полной очисткой информации о пользователе и localStorage */
  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    navigate('/', { replace: true });    
  };

  /** Базовая функция для обращения к серверу и обработки ответа,
   * принимает апи метод и колбэк then так как обрабтка промиса индивидуальная. */
  const [errorByBack, setErrorByBack] = useState('');
  function callingBaseToServer({ apiMetod, thenCallback, finallyCallback }) {
    apiMetod
      .then(thenCallback)
      .catch((err) => {
        setErrorByBack(err);
        console.log(err)
      })
      .finally(finallyCallback ? finallyCallback : () => {});
  }

  /** Отправялеем данные видео на сервер, меняем подпись кнопки сабмита при загрузке,
   * полученную карточку подгружаем в глобальный стэйт. */
  function handleAddMovie(dataMovie) {
    callingBaseToServer({
      apiMetod: mainApi.pushInfoCreateMovie(
        dataMovie,
        localStorage.getItem('jwt')
      ),
      thenCallback: (newMovies) => {
        setSavedMovies([newMovies, ...savedMovies]);
        localStorage.removeItem('savedMovies');
      },
    });
  }

  /** По id карточки отправляем запрос на удаление, после ответа фильтруем карточки
   * в глобальном стэйте по id и возврящаем все кроме той что удалили. */
  function handleMovieDelete(movieId) {
    callingBaseToServer({
      apiMetod: mainApi.deleteMovie(movieId, localStorage.getItem('jwt')),
      thenCallback: () => {
        setSavedMovies(
          savedMovies.filter((item) => {
            return item._id !== movieId;
          })
        );
        localStorage.removeItem('savedMovies');
        // setIdDeleteMovie('');
      },
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <LoggedInContext.Provider value={loggedIn}>
    <div className="content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route
            path="movies"
            element={
              <ProtectedRouteElement
                component={Movies}                
                movies={movies}
                handleAddMovie={handleAddMovie}
                isPreloader={isPreloader}
                isNotLoadMovies={isNotLoadMovies}
              />
            }
          />
          <Route
            path="saved-movies"
            element={
              <ProtectedRouteElement
                component={SavedMovies}
                savedMovies={savedMovies}
                handleMovieDelete={handleMovieDelete}
                isNotFoundSavedMovies={isNotFoundSavedMovies}
                isPreloader={isPreloader}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRouteElement
                component={ProfileForm}
                handleSignOut={handleSignOut}
                error={errorByBack}                
                handleUpdateUser={handleUpdateUser}
              />
            }
          />         
          <Route
            path="signin"
            element={
              <Login handleEnterUser={handleEnterUser} error={errorByBack} />
            }
          />
          <Route
            path="signup"
            element={
              <Register
                handleRegisterUser={handleRegisterUser}
                error={errorByBack}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
    </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}
