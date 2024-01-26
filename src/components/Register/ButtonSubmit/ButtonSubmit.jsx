import { useState } from 'react';
import './ButtonSubmit.css';

export default function ButtonSubmit({ buttonText, moreMarginTop, isValid }) {
  const [isError, setIsError] = useState(false);

  function handleButtonSubmit(e) {
    e.preventDefault();
    setIsError(true);
  }

  return (
    <div
      className={
        'regist__block-submit ' +
        (moreMarginTop ? 'regist__block-submit_margin-top' : '')
      }
    >
      <span
        className={`regist__error-submit ${
          isError ? 'regist__error-submit_active' : ''
        }`}
      >
        Что-то пошло не так...
      </span>
      <button
        onClick={handleButtonSubmit}
        className={
          'regist__button-submit ' +
          (!isValid ? 'regist__button-submit_disable' : '')
        }
        disabled={!isValid ? true : false}
      >
        {buttonText}
      </button>
    </div>
  );
}
