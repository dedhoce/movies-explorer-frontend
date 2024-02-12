import './RegisterForm.css';
import LabelInput from '../LabelInput/LabelInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { useFormAndValidation } from '../../../utils/hoocks/useFormAndValidation';

export default function RegisterForm({handleRegisterUser, error}) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const { name, email, password } = values

  function handleButtonSubmitRegist(e) {
    e.preventDefault()
    handleRegisterUser({name, email, password})
  }

  return (
    <form className="regist">
      <LabelInput
        name="name"
        title="Имя"
        value={name ? name : ''}
        error={errors.name}
        inputType="text"
        isValid={isValid}
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
        isValid={isValid}
        onChange={handleChange}
      />
      <LabelInput
        name="password"
        title="Пароль"
        value={password ? password : ''}
        error={errors.password}
        inputType="password"
        isValid={isValid}
        onChange={handleChange}
      />
      <ButtonSubmit
        isValid={isValid}
        buttonText="Зарегестрироваться"
        marginRegist={true}
        handleButtonSubmit={handleButtonSubmitRegist}
        error={error}
      />
    </form>
  );
}
