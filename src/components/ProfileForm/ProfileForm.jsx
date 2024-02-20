import './ProfileForm.css';
import { useEffect, useContext, useState } from 'react';
import { useFormAndValidation } from '../../utils/hoocks/useFormAndValidation';
import ProfileLabelInput from './ProfileLabelInput/ProfileLabelInput';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsPreloaderContext } from '../../contexts/IsPreloaderContext';
import Preloader from '../../vendor/Preloader/Preloader';

export default function ProfileForm({
  handleSignOut,  
  handleUpdateUser,
  error,
  isSuccessfulResponse  
}) {
  //подписываемся на контекст стэйта с данными пользователя
  const currentUser = useContext(CurrentUserContext)
  const isPreloader = useContext(IsPreloaderContext)

  const [isChangeUserData, setIsChangeUserData] = useState(false)  

  const { values, handleChange, errors, setValues, setIsValid, isValidForm, isInputValid } =
    useFormAndValidation();

  const { name, email } = values;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      setValues({ name: currentUser.name, email: currentUser.email });      
    }    
  }, [location.pathname, currentUser.name, currentUser.email]);

  useEffect(() => {
    if(name === currentUser.name && email === currentUser.email) {
      setIsChangeUserData(false)
    } else { 
      setIsChangeUserData(true)
    }
  },[name, email, currentUser.name, currentUser.email])

  function handleEdit(e) {
    e.preventDefault();        
    handleUpdateUser({ name, email });
    setIsValid(false)    
  }

  return (
    <form className="profile-form">
      <h2 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h2>
      <ProfileLabelInput
        typeInput="text"
        title="Имя"
        name="name"
        placeholder="Введите имя"
        value={name}
        error={errors.name}
        isValid={isInputValid.name}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
      />
      <ProfileLabelInput
        typeInput="email"
        title="E-mail"
        name="email"
        placeholder="Введите e-mail"
        value={email}
        error={errors.email}
        isValid={isInputValid.email}
        onChange={handleChange}
      />
      <span
        className={`profile-form__error ${
          error ? 'profile-form__error_active' : ''
        }${
          isSuccessfulResponse ? 'profile-form__response_active' : ''
        }`}
      >
        {isSuccessfulResponse ? 'Ваши данные успешно обновлены.' : error}
      </span>
      {isPreloader ? 
        <Preloader/> 
      : 
        <button
          onClick={handleEdit}
          className={`profile-form__button ${
            !isChangeUserData || !isValidForm ? 'profile-form__button_disable' : ''
          }`}
          disabled={!isChangeUserData || !isValidForm ? true : false}
        >
          {!isChangeUserData ? 'Редактировать нечего' : 'Редактировать'}
        </button>
      }
      <button
        onClick={handleSignOut}
        className="profile-form__button profile-form__button_red"
      >
        Выйти из аккаунта
      </button>
    </form>
  );
}
