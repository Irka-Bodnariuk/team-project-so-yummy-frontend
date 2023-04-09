import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationUser, loginUser } from 'store/auth/authOperations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';

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
  Wrap,
} from './AuthForm.styled';

const loginSchema = Yup.object({
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required(),
  // password: Yup.string().matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  // ),
});

const registerSchema = Yup.object({
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

export const AuthForm = ({ login }) => {
  const [secure, setSecure] = useState(null);
  console.log(secure);
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
      validationSchema={!login ? registerSchema : loginSchema}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <FormTitle>{!login ? 'Registration' : 'Sign In'}</FormTitle>
          <Form>
            <FormInputWrapper>
              {!login && (
                <FormLabel>
                  <Field name="name">
                    {({ field }) => (
                      <>
                        <FormInput
                          state={
                            errors.name && touched.name
                              ? 'error'
                              : !errors.name && touched.name
                              ? 'checked'
                              : 'undefined'
                          }
                          type="text"
                          placeholder="Name"
                          autoComplete="off"
                          {...field}
                        />
                        <IconName
                          state={
                            errors.name && touched.name
                              ? 'error'
                              : !errors.name && touched.name
                              ? 'checked'
                              : 'undefined'
                          }
                        />
                        {errors.name && touched.name && <ErrorIcon />}
                        {!errors.name && touched.name && <CheckIcon />}
                      </>
                    )}
                  </Field>
                </FormLabel>
              )}
              <FormLabel>
                <Field name="email">
                  {({ field }) => (
                    <>
                      <FormInput
                        state={
                          errors.email && touched.email
                            ? 'error'
                            : !errors.email && touched.email
                            ? 'checked'
                            : 'undefined'
                        }
                        type="Email"
                        placeholder="Email"
                        autoComplete="off"
                        {...field}
                      />
                      <IconEmail
                        state={
                          errors.email && touched.email
                            ? 'error'
                            : !errors.email && touched.email
                            ? 'checked'
                            : 'undefined'
                        }
                      />
                      {errors.email && touched.email && <ErrorIcon />}
                      {!errors.email && touched.email && <CheckIcon />}
                    </>
                  )}
                </Field>
              </FormLabel>
              <FormLabel>
                <Field name="password">
                  {({ field }) => (
                    <Wrap>
                      <FormInput
                        state={
                          errors.password && touched.password
                            ? 'error'
                            : !errors.email && touched.email
                            ? 'checked'
                            : 'undefined'
                        }
                        type="password"
                        placeholder="Password"
                        {...field}
                        onChange={e => {
                          field.onChange(e);
                          setSecure(zxcvbn(e.target.value).score);
                          console.log(zxcvbn(e.target.value).score);
                        }}
                      />
                      <IconPassword
                        state={
                          errors.password && touched.password
                            ? 'error'
                            : !errors.password && touched.password
                            ? 'checked'
                            : 'undefined'
                        }
                      />
                      {errors.email && touched.email && <ErrorIcon />}
                      {!errors.email && touched.email && <CheckIcon />}
                      {/* {secure === 1 || secure === 2 ? (
                        <p>Password is little secure</p>
                      ) : null}
                      {secure === 3 ? (
                        <p>your password is medium secure</p>
                      ) : null}
                      {secure === 4 ? <p>your password is secure</p> : null} */}
                      {secure === 1 || secure === 2 ? (
                        <p>Password is little secure</p>
                      ) : null}
                    </Wrap>
                  )}
                </Field>
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
