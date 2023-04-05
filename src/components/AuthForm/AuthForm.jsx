import React from 'react';
import { Formik, Form } from 'formik';

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
} from './AuthForm.styled';

export const AuthForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={schema}
    >
      <FormWrapper>
        <FormTitle>Registration</FormTitle>
        <Form>
          <FormInputWrapper>
            <FormLabel>
              <IconName />
              <FormInput type="text" name="name" placeholder="Name" />
            </FormLabel>

            <FormLabel>
              <IconEmail />
              <FormInput type="email" name="email" placeholder="Email" />
            </FormLabel>

            <FormLabel>
              <IconPassword />
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </FormLabel>
          </FormInputWrapper>
          <Button
            type="submit"
            look="subscribe"
            size="14px 108px"
            sizeTablet="21px 168px;"
            fontSize="16px"
          >
            Sign up
          </Button>
        </Form>
        <FormLink to="/login">Sign In</FormLink>
      </FormWrapper>
    </Formik>
  );
};
