import { ChangeEvent, FormEvent, useState } from 'react';

import userApi from '../apis/userApi';

import { validate } from 'common/utils';

export interface InitialValue<T> {
  [index: string]: T | undefined;
  userId: T;
  username?: T;
  phoneNumber?: T;
  name?: T;
  password: T;
  email: T;
  passwordConfirm: T;
}

const useForm = (initialValues: InitialValue<string>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    userId: '',
    password: '',
    username: '',
    email: '',
    passwordConfirm: ''
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    if (name === 'passwordConfirm' && value !== values.password) setErrors((prev) => ({...prev, [name]: '비밀번호가 일치하지 않습니다.'}))
    else setErrors((prev) => ({...prev, [name]: validate(value, name)[name]}));
    setValues((prev) => ({...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    let isValidate = true;
    Object.values(errors).forEach((errorMsg) => {
      if (errorMsg !== '') isValidate = false;
    })
    if (isValidate) {
      console.log(values);
      userApi
        .postUserInfoForSignUp({
          userId: values.userId,
          userPassword: values.password,
          userPasswordCheck: values.passwordConfirm,
          userEmail: values.email,
          userName: values.username,
          userProfileImg: undefined
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      console.log('회원가입 형식이 올바르지 않습니다. 다시 확인해주세요.');
    }
  };

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
