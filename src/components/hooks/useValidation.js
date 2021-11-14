import React from 'react';
const validator = require("email-validator");

export default function useValidation(value, initialState, validations) {
  const [isEmpty, setEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [isEmailError, setEmailError] = React.useState(false);
  const [isNameError, setNameError] = React.useState(false);
  const [isSameError, setIsSameError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [inputValid, setInputValid] = React.useState(false);

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {
            setEmpty(false);
            setErrorText('');
          } else {
            setEmpty(true)
            setErrorText('Обязательное поле');
            return
          }
          break;

        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true)
            setErrorText('Минимальная длина строки 2');
          } else {
            setMinLengthError(false);
            setErrorText('');
          }
          break;

        case 'isEmail':
          if (validator.validate(value)) {
            setErrorText('');
            setEmailError(false);
          } else {
            setErrorText('Пожалуйста, введите корректный email-адрес');
            setEmailError(true);
          }
          break;

        case 'isName':
          const re2 = /[^a-zа-яё\- ]/iu;
          if (!re2.test(String(value).toLowerCase())) {
            setErrorText('');
            setNameError(false);
          } else {
            setErrorText('Данное поле должно содержать только латиницу, кириллицу, пробел или дефис.');
            setNameError(true);
          }
          break;

        case 'isSame':
          if (initialState === value) {
            setIsSameError(true);
          } else {
            setIsSameError(false);
          }
          break;

        default:
          break;
      }
    }
  }, [value, validations]);

  React.useEffect(() => {
    if (isEmpty || minLengthError || isEmailError || isNameError || isSameError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, isEmailError, isNameError, isSameError]);

  return {
    errorText,
    inputValid
  }
}
