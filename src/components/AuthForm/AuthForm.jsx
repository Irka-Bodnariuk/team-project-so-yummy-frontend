import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser, loginUser } from 'store/auth/authOperations';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from 'components/Button/Button';
import {
  FormWrapper,
  FormTitle,
  FormInputWrapper,
  FormInput,
  FormLabel,
  FormLink,
  IconName,
  IconEmail,
  IconPassword,
  ErrorIcon,
  CheckIcon,
} from './AuthForm.styled';

const schema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/)
    .required(),
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required(),
  // password: Yup.string().matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  // ),
});

// const isLeag = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/';
// const paragraph = 'Allo2757_';
// const found = paragraph.match(isLeag);
// console.log(found);

export const AuthForm = ({ login }) => {
  const dispatch = useDispatch();

  const initialValuesRegister = {
    name: '',
    email: '',
    password: '',
  };
  const initialValuesLogin = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    !login ? dispatch(registrationUser(values)) : dispatch(loginUser(values));
  };
  return (
    <Formik
      initialValues={!login ? initialValuesRegister : initialValuesLogin}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <FormTitle>{!login ? 'Registration' : 'Sign In'}</FormTitle>
          <Form>
            <FormInputWrapper>
              {!login && (
                <FormLabel>
                  {errors.name && touched.name ? (
                    <>
                      <FormInput
                        state="error"
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <IconName state="error" />
                      <ErrorMessage name="name">
                        {msg => <ErrorIcon />}
                      </ErrorMessage>
                    </>
                  ) : !errors.name && touched.name ? (
                    <>
                      <FormInput
                        state="checked"
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <IconName state="checked" />
                      <CheckIcon />
                    </>
                  ) : (
                    <>
                      <FormInput
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <IconName />
                    </>
                  )}
                </FormLabel>
              )}

              <FormLabel>
                {errors.email && touched.email ? (
                  <>
                    <FormInput
                      state="error"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <IconEmail state="error" />
                    <ErrorMessage name="name">
                      {msg => <ErrorIcon />}
                    </ErrorMessage>
                  </>
                ) : !errors.email && touched.email ? (
                  <>
                    <FormInput
                      state="checked"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <IconEmail state="checked" />
                    <CheckIcon />
                  </>
                ) : (
                  <>
                    <FormInput type="email" name="email" placeholder="Email" />
                    <IconEmail />
                  </>
                )}
              </FormLabel>

              <FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <IconPassword />
              </FormLabel>
            </FormInputWrapper>
            <Button
              type="submit"
              look="subscribe"
              width="100%"
              heigth="45px"
              heigthTablet="59px"
              fontSize="16px"
            >
              {!login ? 'Sign up' : 'Sign In'}
            </Button>
          </Form>
          {!login ? (
            <FormLink to="/signin">Sign In</FormLink>
          ) : (
            <FormLink to="/register">Registration</FormLink>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};
