import {useEffect, useState} from 'react';
import { pattern } from '../../constants/pattern'
 
export function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);
  const [ isPasswordValid, setIsPasswordValid ] = useState(false);
  const [ isEmailValid, setIsEmailValid ] = useState(false);


  useEffect(() => {
    if(pattern.email.test(values.email)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
    if(pattern.password.test(values.password)) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
    }
  }, [values])

  function visualActualyError(name) {
    let message
    if(name === 'email' && !isEmailValid) {
      return message = 'E-mail должен соотвествовать шаблону name@domain.ru/com/net'
    }   
    if(name === 'password' && !isPasswordValid) {
      return message = 'Пароль должен состоять из цифр и латинских букв строчных/заглавных'      
    }     
  }
    
  const handleChange = (e) => {
    console.log(1)    
    const {name, value} = e.target  
          
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: visualActualyError(name) || e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity() && isPasswordValid && isEmailValid);
  }; 
  console.log(isValid)
  return { values, handleChange, errors, isValid, setValues, setIsValid };
}

