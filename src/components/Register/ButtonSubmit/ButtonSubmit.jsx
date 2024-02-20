import './ButtonSubmit.css';
import { IsPreloaderContext } from "../../../contexts/IsPreloaderContext";
import { useContext } from 'react';


export default function ButtonSubmit({ buttonText, marginRegist, marginLogin, isValid, handleButtonSubmit, error }) {
  const isPreloader = useContext(IsPreloaderContext)
  return (
    <div
      className={
        'regist__block-submit ' +
        (marginLogin ? 'regist__block-submit_login_margin-top' : '')
        + (marginRegist  ? 'regist__block-submit_regist_margin-top' : '')
      }
    >
      <span
        className={`regist__error-submit ${
          error ? 'regist__error-submit_active' : ''
        }`}
      >
        {error}
      </span>
      <button
        onClick={handleButtonSubmit}
        className={
          'regist__button-submit ' +
          (!isValid ? 'regist__button-submit_disable' : '')
        }
        disabled={!isValid || isPreloader ? true : false}
      >
        {buttonText}
      </button>
    </div>
  );
}
