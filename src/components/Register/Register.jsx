import HeaderReg from "./HeaderReg/HeaderReg";
import RegisterForm from './RegisterForm/RegisterForm'
import './Register.css'

export default function Register() {
  return (
    <div className="register">
      <HeaderReg title="Добро пожаловать!" />
      <RegisterForm />
    </div>
  );
}
