import './RegisterForm.css';
import LabelInput from '../LabelInput/LabelInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { useFormAndValidation } from '../../../utils/hoocks/useFormAndValidation';
import Preloader from '../../../vendor/Preloader/Preloader';
import { IsPreloaderContext } from '../../../contexts/IsPreloaderContext';
import { useContext } from 'react';

export default function RegisterForm({ handleRegisterUser, error }) {
  const isPreloader = useContext(IsPreloaderContext);
  const { values, handleChange, errors, isValidForm, isInputValid } =
    useFormAndValidation();

  const { name, email, password } = values;

  function handleButtonSubmitRegist(e) {
    e.preventDefault();
    handleRegisterUser({ name, email, password });
  }

  return (
    <form className="regist">
      <LabelInput
        name="name"
        title="Имя"
        value={name ? name : ''}
        error={errors.name}
        inputType="text"
        isValid={isInputValid.name}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
      />
      <LabelInput
        name="email"
        title="E-mail"
        value={email ? email : ''}
        error={errors.email}
        inputType="email"
        isValid={isInputValid.email}
        onChange={handleChange}
      />
      <LabelInput
        name="password"
        title="Пароль"
        value={password ? password : ''}
        error={errors.password}
        inputType="password"
        isValid={isInputValid.password}
        onChange={handleChange}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
        <ButtonSubmit
          isValid={isValidForm}
          buttonText="Зарегестрироваться"
          marginRegist={true}
          handleButtonSubmit={handleButtonSubmitRegist}
          error={error}
        />
      )}
    </form>
  );
}
