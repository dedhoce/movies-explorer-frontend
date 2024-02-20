import HeaderReg from '../Register/HeaderReg/HeaderReg';
import '../Register/Register.css';
import LoginForm from './LoginForm/LoginForm';
import Link from '../Register/Link/Link';
import { useContext } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Login({ handleEnterUser, error }) {
  const currentUser = useContext(CurrentUserContext)
  
  const loggedIn = useContext(LoggedInContext);
  return (
    <section className="register">
      <HeaderReg
        title={loggedIn ? `Вы уже вошли в свой профиль, ${currentUser.name}!` : 'Рады видеть!'}
      />
      {!loggedIn ? (
        <>
          <LoginForm handleEnterUser={handleEnterUser} error={error} />
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
