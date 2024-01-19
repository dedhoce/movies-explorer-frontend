import './ButtonSubmit.css';

export default function ButtonSubmit({ buttonText, moreMarginTop }) {
  return (
    <button
      className={
        'regist__button-submit ' + (moreMarginTop
          ? 'regist__button-submit_margin-top'
          : '')
      }
    >
      {buttonText}
    </button>
  );
}
