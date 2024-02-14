import { useEffect, useState } from 'react';
import { pattern } from '../../constants/pattern';
import { errorsMessage } from '../../constants/errorsMessage'

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isInputValid, setIsInputValid] = useState({});

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setIsInputValid({
      ...isInputValid,
      [name]: name in pattern ? pattern[name].test(value) : e.target.checkValidity(),
    })
    setErrors({
      ...errors,
      [name]: name !== 'name' ? errorsMessage.email : e.target.validationMessage,
    });
    setIsValid(e.target.closest('form').checkValidity());
  };
  
  useEffect(() => {    
    (isInputValid.name !== undefined ? isInputValid.name : true) &&
    (isInputValid.password !== undefined ? isInputValid.password : true) &&
    (isInputValid.email !== undefined ? isInputValid.email : true) &&
    isValid
      ? setIsValidForm(true)
      : setIsValidForm(false);
  }, [isInputValid.name, isInputValid.email, isInputValid.password, isValid]);  
  return {
    values,
    handleChange,
    errors,
    isValidForm,
    isInputValid,
    setValues,
    setIsValid,
  };
}
