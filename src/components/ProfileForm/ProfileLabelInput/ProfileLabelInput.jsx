import { useContext } from 'react';
import './ProfileLabelInput.css';
import { IsPreloaderContext } from '../../../contexts/IsPreloaderContext';

export default function ProfileLabelInput({
  title,
  name,
  typeInput,
  placeholder,
  value,
  onChange,  
  error,
  isValid,
  minLength,
  maxLength,
}) {
  const isPreloader = useContext(IsPreloaderContext)
  return (
    <label className="profile-form__input-label" >
      <span className="profile-form__label-block">
        <span className="profile-form__input-title">{title}</span>
        <input
          type={typeInput}
          name={name}
          className="profile-form__input"
          placeholder={placeholder}
          value={value ? value : ''}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          disabled={isPreloader}
          required
        />
      </span>
      <span
        className={`profile-form__error ${
          !isValid ? 'profile-form__error_active' : ''
        }`}
      >
        {error}
      </span>
    </label>
  );
}
