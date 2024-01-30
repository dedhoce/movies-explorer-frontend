import './ProfileForm.css';
import { useState } from 'react';
import { useFormAndValidation } from '../../utils/hoocks/useFormAndValidation';
import ProfileLabelInput from './ProfileLabelInput/ProfileLabelInput';

export default function ProfileForm() {
  const [isActive, setIsActive] = useState(true);

  const { values, handleChange, errors } = useFormAndValidation(); // isValid использовать потом на кнопке сабмита

  function handleEdit(e) {
    e.preventDefault();
    setIsActive(false);
  }
  return (
    <form className="profile-form">
      <h2 className="profile-form__title">Привет, Андрей!</h2>
      <ProfileLabelInput
        typeInput="text"
        title="Имя"
        name="name"
        placeholder="Введите имя"
        value={values.name}
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
        value={values.email}
        error={errors.email}
        onChange={handleChange}        
      />
      <span
        className={`profile-form__error ${
          !isActive ? 'profile-form__error_active' : ''
        }`}
      >
        При обновлении профиля произошла ошибка.
      </span>
      <button
        onClick={handleEdit}
        className={`profile-form__button ${
          !isActive ? 'profile-form__button_disable' : ''
        }`}
        // disabled={!isValid ? true : false}
      >
        Редактировать
      </button>
      <button className="profile-form__button profile-form__button_red">
        Выйти из аккаунта
      </button>
    </form>
  );
}
