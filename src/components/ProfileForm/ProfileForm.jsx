import './ProfileForm.css';
import { useEffect, useContext } from 'react';
import { useFormAndValidation } from '../../utils/hoocks/useFormAndValidation';
import ProfileLabelInput from './ProfileLabelInput/ProfileLabelInput';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function ProfileForm({
  handleSignOut,  
  handleUpdateUser,
  error,
}) {
  //подписываемся на контекст стэйта с данными пользователя
  const currentUser = useContext(CurrentUserContext)

  const { values, handleChange, errors, setValues, isValid } =
    useFormAndValidation();

  const { name, email } = values;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      setValues({ name: currentUser.name, email: currentUser.email });
    }
  }, []);

  function handleEdit(e) {
    e.preventDefault();    
    handleUpdateUser({ name, email });    
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
        onChange={handleChange}
      />
      <span
        className={`profile-form__error ${
          error ? 'profile-form__error_active' : ''
        }`}
      >
        {error}
      </span>
      <button
        onClick={handleEdit}
        className={`profile-form__button ${
          !isValid ? 'profile-form__button_disable' : ''
        }`}
        disabled={!isValid ? true : false}
      >
        Редактировать
      </button>
      <button
        onClick={handleSignOut}
        className="profile-form__button profile-form__button_red"
      >
        Выйти из аккаунта
      </button>
    </form>
  );
}
