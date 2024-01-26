import './ProfileLabelInput.css';

export default function ProfileLabelInput({
  title,
  name,
  typeInput,
  placeholder,
  value,
  onChange,  
  error,
  minLength,
  maxLength,
}) {
  return (
    <label className="profile-form__input-label">
      <div className="profile-form__label-block">
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
          required
        />
      </div>
      <span
        className={`profile-form__error ${
          error ? 'profile-form__error_active' : ''
        }`}
      >
        {error ? error : ''}
      </span>
    </label>
  );
}
