import './RegisterForm.css';
import LabelInput from '../LabelInput/LabelInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

export default function RegisterForm() {
  return (
    <form className="regist">
      <LabelInput
        title="Имя"
        inputValue="Андрей"
        error="Что-то пошло не так..."
        isError={false}
        inputType="text"
      />
      <LabelInput
        title="E-mail"
        inputValue="dedhoce@yandex.ru"
        error="Что-то пошло не так..."
        isError={false}
        inputType="email"
      />
      <LabelInput
        title="Пароль"
        inputValue="11111111111111"
        error="Что-то пошло не так..."
        isError={true}
        inputType="password"
      />
      <ButtonSubmit buttonText="Зарегестрироваться" />
    </form>
  );
}
