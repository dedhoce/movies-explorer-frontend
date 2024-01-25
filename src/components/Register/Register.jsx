import HeaderReg from "./HeaderReg/HeaderReg";
import RegisterForm from './RegisterForm/RegisterForm';
import Link from './Link/Link';
import './Register.css';

export default function Register() {
  return (
    <div className="register">
      <HeaderReg title="Добро пожаловать!" />
      <RegisterForm />
      <Link title="Уже зарегестрированы?" linkMessage="Войти" href="/signin"/>
    </div>
  );
}
