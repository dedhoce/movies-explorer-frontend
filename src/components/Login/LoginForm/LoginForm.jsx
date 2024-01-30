import '../../Register/RegisterForm/RegisterForm.css';
import '../../Register/Register.css';
import LabelInput from '../../Register/LabelInput/LabelInput';
import ButtonSubmit from '../../Register/ButtonSubmit/ButtonSubmit';
import { useFormAndValidation } from '../../../utils/hoocks/useFormAndValidation';

export default function LoginForm() {
  const { values, handleChange, errors, isValid } =
    useFormAndValidation();

  return (
    <form className="regist">
      <LabelInput
        name="email"
        title="E-mail"
        value={values.email ? values.email : ''}
        error={errors.email}        
        inputType="email"
        isValid={isValid}
        onChange={handleChange}        
      />
      <LabelInput
        name="password"
        title="Пароль"
        value={values.password ? values.password : ''}
        error={errors.password}        
        inputType="password"
        isValid={isValid}
        onChange={handleChange}        
      />
      <ButtonSubmit
        buttonText="Войти"
        marginLogin={true}
        isValid={isValid}
      />
    </form>
  );
}
