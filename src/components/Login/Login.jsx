import HeaderReg from '../Register/HeaderReg/HeaderReg';
import '../Register/Register.css';
import LoginForm from './LoginForm/LoginForm';

export default function Login() {
  return (
    <div className="register">
      <HeaderReg title="Рады видеть!" />
      <LoginForm />
    </div>
  );
}
