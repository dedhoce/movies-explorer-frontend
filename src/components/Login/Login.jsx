import HeaderReg from '../Register/HeaderReg/HeaderReg';
import '../Register/Register.css';
import LoginForm from './LoginForm/LoginForm';
import Link from '../Register/Link/Link';
import { useContext } from 'react';
import { IsPreloaderContext } from '../../contexts/IsPreloaderContext';
import Preloader from '../../vendor/Preloader/Preloader';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Login({ handleEnterUser, error }) {
  const currentUser = useContext(CurrentUserContext)
  const isPreloader = useContext(IsPreloaderContext);
  const loggedIn = useContext(LoggedInContext);
  return (
    <section className="register">
      <HeaderReg
        title={loggedIn ? `Вы уже вошли в свой профиль, ${currentUser.name}!` : 'Рады видеть!'}
      />
      {!loggedIn ? (
        <>
          {isPreloader ? <Preloader /> : <LoginForm handleEnterUser={handleEnterUser} error={error} />}
          <Link
            title="Еще не зарегестрированы?"
            linkMessage="Регистрация"
            href="/signup"
          />
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
