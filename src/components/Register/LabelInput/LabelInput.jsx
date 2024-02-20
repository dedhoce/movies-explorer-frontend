import './LabelInput.css';
import { IsPreloaderContext } from "../../../contexts/IsPreloaderContext";
import { useContext } from 'react';

export default function LabelInput({
  name,
  title,
  value,
  error,
  inputType,  
  onChange,
  isValid,  
  minLength,
  maxLength,
}) { 
  const isPreloader = useContext(IsPreloaderContext)   
  return (
    <label className="regist__input-label">
      <span className="regist__input-title">{title}</span>
      <input
        name={name}
        type={inputType}
        className={
          'regist__input ' + (!isValid ? 'regist__input_error_active' : '')
        }
        placeholder={`Введите ${title.toLowerCase()}`}
        onChange={onChange}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        required
        disabled={isPreloader}
      />
      <span
        className={
          'regist__input-error ' + (!isValid ? 'regist__input-error_enabled' : '')
        }
      >
        {error}
      </span>
    </label>
  );
}
