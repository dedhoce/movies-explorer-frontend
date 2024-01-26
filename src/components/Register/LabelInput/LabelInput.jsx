import './LabelInput.css';

export default function LabelInput({
  name,
  title,
  value,
  error,
  inputType,  
  onChange,
  minLength,
  maxLength,
}) {
  return (
    <label className="regist__input-label">
      <span className="regist__input-title">{title}</span>
      <input
        name={name}
        type={inputType}
        className={
          'regist__input ' + (error ? 'regist__input_error_active' : '')
        }
        placeholder={`Введите ${title.toLowerCase()}`}
        onChange={onChange}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span
        className={
          'regist__input-error ' + (error ? 'regist__input-error_enabled' : '')
        }
      >
        {error}
      </span>
    </label>
  );
}
