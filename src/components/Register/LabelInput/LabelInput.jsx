import './LabelInput.css'

export default function LabelInput({title, inputValue, error, isError, inputType, placeholder}) {
  return (
    <label className="regist__input-label">
      <span className="regist__input-title">{title}</span>
      <input type={inputType} className={"regist__input " + (isError ? 'regist__input_error_active' : '')} placeholder={`Введите ${title.toLowerCase()}`} value={inputValue} required/>
      <span className={'regist__input-error ' + (isError ? 'regist__input-error_enabled' : '')}>{error}</span>
    </label>
  );
}
