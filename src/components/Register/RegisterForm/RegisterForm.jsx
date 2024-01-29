import './RegisterForm.css';
import LabelInput from '../LabelInput/LabelInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import { useFormAndValidation } from '../../../utils/hoocks/useFormAndValidation';

export default function RegisterForm() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  return (
    <form className="regist">
      <LabelInput
        name="name"
        title="Имя"
        value={values.name ? values.name : ''}
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
        isValid={isValid}
        buttonText="Зарегестрироваться"
        marginRegist={true}
      />
    </form>
  );
}
