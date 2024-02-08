import HeaderReg from '../Register/HeaderReg/HeaderReg';
import '../Register/Register.css';
import LoginForm from './LoginForm/LoginForm';
import Link from '../Register/Link/Link';

export default function Login({handleEnterUser, error}) {
  return (
    <section className="register">
      <HeaderReg title="Рады видеть!" />
      <LoginForm handleEnterUser={handleEnterUser} error={error}/>
      <Link title="Еще не зарегестрированы?" linkMessage="Регистрация" href="/signup"/>
    </section>
  );
}
