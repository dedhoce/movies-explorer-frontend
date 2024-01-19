import '../../Register/RegisterForm/RegisterForm.css';
import LabelInput from '../../Register/LabelInput/LabelInput';
import Link from '../../Register/Link/Link';
import ButtonSubmit from '../../Register/ButtonSubmit/ButtonSubmit';

export default function LoginForm() {
  return (
    <>
      <div className="regist">
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
        <ButtonSubmit buttonText="Войти" moreMarginTop='regist__button-submit_margin-top'/>
      </div>
      <Link title="Еще не зарегестрированы?" linkMessage="Регистрация"/>
    </>
  );
}
