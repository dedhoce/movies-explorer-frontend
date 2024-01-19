import './Header.css';
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom';

export default function Header({ isLogin }) {
  return (
    <div className="header">
      <div className='header__logo-nav'>
        <Logo />
        {isLogin ? (        
          <nav className="header__links">
            <NavLink to='/movies' className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={({isActive}) => `header__link ${isActive ? "header__link_active" : ""}`}>
              Сохраненые фильмы
            </NavLink>
          </nav>       
        ) : <></>}
      </div>
      {isLogin ? (                  
        <div className="header__accaunt">
          Аккаунт
          <NavLink to="/profile" className="header__accaunt-label"></NavLink>
        </div>        
      ) : (
        <div className="header__buttons">
          <button className="header__button-signup">Регистрация</button>
          <button className="header__button-signin">Войти</button>
        </div>
      )}
    </div>
  );
}
