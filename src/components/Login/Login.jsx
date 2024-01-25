import HeaderReg from '../Register/HeaderReg/HeaderReg';
import '../Register/Register.css';
import LoginForm from './LoginForm/LoginForm';
import Link from '../Register/Link/Link';

export default function Login() {
  return (
    <section className="register">
      <HeaderReg title="Рады видеть!" />
      <LoginForm />
      <Link title="Еще не зарегестрированы?" linkMessage="Регистрация" href="/signup"/>
    </section>
  );
}
