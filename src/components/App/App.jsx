import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
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
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { IsPreloaderContext } from '../../contexts/IsPreloaderContext';

export default function App() {
  /* Глобальный стэйт с данными профиля пользователя. */
  const [currentUser, setCurrentUser] = useState({});
  /** Глобальный стэйт с объектом видео. */
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  /** Глобальный стэйт с объектом сохраненых видео. */
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || []
  );
  /** Стэйт авторизации пользователя. */
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt') !== null || false);

  /** стейт для элемента Сохраненые видео не найдены */
  const [isNotFoundSavedMovies, setIsNotFoundSavedMovies] = useState(false);

  /** стейт для отображения прелоадера на страницах  */
  const [isPreloader, setIsPreloader] = useState(false);

  /**Стэйт ошибки при загрузке видео */
  const [isNotLoadMovies, setIsNotLoadMovies] = useState(false);

  const [errorByBack, setErrorByBack] = useState('');

  const [arrIdSavedMovies, setArrIdSavedMovies] = useState([]);

  const [isSuccessfulResponse, setIsSuccessfulResponse] = useState(false)

  const location = useLocation();

  /** Базовая функция для обращения к серверу и обработки ответа,
   * принимает апи метод и колбэк then так как обрабтка промиса индивидуальная. */
  function callingBaseToServer({ apiMetod, thenCallback }) {
    setIsPreloader(true);
    apiMetod
      .then(thenCallback)
      .catch((err) => {
        setErrorByBack(err);
        if (err.message === 'Failed to fetch') {
          alert('Ошибка обновления: проверьте соединение с интернетом.');
        }
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

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
            setErrorByBack('')
          }
        },
      });
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
          setErrorByBack('')
        },
      });
  }, [loggedIn]);

  /** Получаем все видео с сервера по запросу и записываем ответы в localStorage. */
  function getInitialMovies() {
    setIsPreloader(true);
    callingBaseToServer({
      apiMetod: moviesApi.getInitialMovies(),
      thenCallback: (initialMovies) => {
        localStorage.setItem('movies', JSON.stringify(initialMovies));
        setMovies(initialMovies);
        setIsNotLoadMovies(false);
        setErrorByBack('')
      },
    });
  }

  /** Получаем сохраненые видео с сервера по запросу и записываем ответы в localStorage. */
  function getInitialSavedMovies() {
    callingBaseToServer({
      apiMetod: mainApi.getInitialMovies(localStorage.getItem('jwt')),
      thenCallback: (initialSavedMovies) => {
        if (!initialSavedMovies) {
          setIsNotFoundSavedMovies(true);
          return;
        }
        setIsNotFoundSavedMovies(false);
        setSavedMovies(initialSavedMovies);
        setErrorByBack('')
        initialSavedMovies &&
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(initialSavedMovies)
          );
      },
    });
  }

  /**Первая загрузка видео на странице видео */
  useEffect(() => {
    if (loggedIn && location.pathname === '/movies') {
      if (localStorage.getItem('movies') === null) {
        getInitialMovies();
      }
      if (localStorage.getItem('savedMovies') === null) {
        getInitialSavedMovies();
      }
    }
  }, [loggedIn, location.pathname]);

  /** Отправляем данные о пользователе на сервер, меняем подпись кнопки сабмита при загрузке,
   *  ответ с новыми данными записываем в глобальный стэйт. */
  function handleUpdateUser({ name, email }) {
    setIsSuccessfulResponse(false)
    callingBaseToServer({
      apiMetod: mainApi.pushUserInfo(
        { name, email },
        localStorage.getItem('jwt')
      ),
      thenCallback: (userInformation) => {
        setCurrentUser(userInformation);
        setIsSuccessfulResponse(true)
        setErrorByBack('')
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
        handleEnterUser({ email, password });
        setErrorByBack('')
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
          navigate('/movies', { replace: true });
          setErrorByBack('')
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
        setErrorByBack('')
      },
    });
  }

  /** По id карточки отправляем запрос на удаление, после ответа фильтруем карточки
   * в глобальном стэйте по id и возврящаем все кроме той что удалили. */
  function handleMovieDelete(movieId) {
    console.log(movieId);
    callingBaseToServer({
      apiMetod: mainApi.deleteMovie(movieId, localStorage.getItem('jwt')),
      thenCallback: () => {
        setSavedMovies(
          savedMovies.filter((item) => {
            return item._id !== movieId;
          })
        );
        setErrorByBack('')
      },
    });
  }

  useEffect(() => {
    loggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, loggedIn]);

  useEffect(() => {
    loggedIn && setArrIdSavedMovies(savedMovies?.map((item) => item.movieId));
  }, [savedMovies, loggedIn]);

  useEffect(() => {
    if (location.pathname !== '/profile') {
      setIsSuccessfulResponse(false);      
    }    
  }, [location.pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <IsPreloaderContext.Provider value={isPreloader}>
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
                      handleMovieDelete={handleMovieDelete}
                      isNotLoadMovies={isNotLoadMovies}
                      arrIdSavedMovies={arrIdSavedMovies}
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
                      isSuccessfulResponse={isSuccessfulResponse}                      
                    />
                  }
                />
                <Route
                  path="signin"
                  element={
                    loggedIn ? (
                      <Navigate to="/" replace />
                    ) : (
                      <Login
                        handleEnterUser={handleEnterUser}
                        error={errorByBack}
                      />
                    )
                  }
                />
                <Route
                  path="signup"
                  element={
                    loggedIn ? (
                      <Navigate to="/" replace />
                    ) : (
                      <Register
                        handleRegisterUser={handleRegisterUser}
                        error={errorByBack}
                      />
                    )
                  }
                />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </div>
        </IsPreloaderContext.Provider>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}
