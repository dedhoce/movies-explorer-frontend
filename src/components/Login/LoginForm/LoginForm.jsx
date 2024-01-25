import '../../Register/RegisterForm/RegisterForm.css';
import '../../Register/Register.css';
import LabelInput from '../../Register/LabelInput/LabelInput';
import ButtonSubmit from '../../Register/ButtonSubmit/ButtonSubmit';

export default function LoginForm() {
  return (
    <form className="regist">
      <LabelInput
        title="E-mail"
        inputValue="dedhoce@yandex.ru"
        error="Что-то пошло не так..."
        isError={false}
        inputType="email"
      />
      <LabelInput
        title="Пароль"
        inputValue=""
        error="Что-то пошло не так..."
        isError={false}
        inputType="password"
      />
      <ButtonSubmit
        buttonText="Войти"
        moreMarginTop="regist__button-submit_margin-top"
      />
    </form>
  );
}
