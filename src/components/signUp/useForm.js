import { useState } from 'react';

import userApi from '../../apis/userApi';

import { validate } from 'common/utils';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  const handleChange = (event, formType) => {
    const { name, value } = event.target;

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, ...validate(values[formType], formType) }));
  };

  const handleSubmit = (event) => {
    const isValidate = validate(values).length === 0;
    if (isValidate) {
      userApi.postUserInfoForSignUp({
        userId: values.userId,
        userPassword: values.password,
        userEmail: values.email,
        userName: values.name,
        userPhoneNumber: values.phoneNumber,
      });
    } else {
      setErrors(validate(values));
    }
    event.preventDefault();
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
