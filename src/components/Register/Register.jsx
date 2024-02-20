import HeaderReg from "./HeaderReg/HeaderReg";
import RegisterForm from './RegisterForm/RegisterForm';
import Link from './Link/Link';
import './Register.css';
import { useContext } from "react";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Register({handleRegisterUser, error}) {
  
  const loggedIn =useContext(LoggedInContext)
  const currentUser = useContext(CurrentUserContext)
  return (
    <div className="register">
      <HeaderReg title={`Добро пожаловать${loggedIn ? ` ${currentUser.name}`: ''}!`} />
      {!loggedIn ? 
      <>
        <RegisterForm handleRegisterUser={handleRegisterUser} error={error}/>
        <Link title="Уже зарегестрированы?" linkMessage="Войти" href="/signin"/>
      </>
      : <></>}
    </div>
  );
}
