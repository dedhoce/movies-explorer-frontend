import '../../Register/RegisterForm/RegisterForm.css';
import '../../Register/Register.css';
import LabelInput from '../../Register/LabelInput/LabelInput';
import ButtonSubmit from '../../Register/ButtonSubmit/ButtonSubmit';
import { useFormAndValidation } from '../../../utils/hoocks/useFormAndValidation';

export default function LoginForm({handleEnterUser, error}) {
  const { values, handleChange, errors, isValidForm, isInputValid } =
    useFormAndValidation();

    const { email, password } = values

  function handleButtonSubmitLogin(e) {
    e.preventDefault()
    handleEnterUser({ email, password })
  }

  return (
    <form className="regist">
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
      <ButtonSubmit
        buttonText="Войти"
        marginLogin={true}
        isValid={isValidForm}
        handleButtonSubmit={handleButtonSubmitLogin}
        error={error}
      />
    </form>
  );
}
