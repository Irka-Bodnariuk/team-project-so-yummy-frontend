import React from 'react';
import { Formik, Form } from 'formik';
import { Box } from 'components/Box';

import { Button } from 'components/Button/Button';
import {
  FormWrapper,
  FormTitle,
  FormInput,
  FormInputWrapper,
  FormLink,
  IconName,
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
          <Box display="flex" flexDirection="column" gridGap="12px" mb="28px">
            <FormInputWrapper>
              <IconName />
              <FormInput type="text" name="name" placeholder="Name" />
            </FormInputWrapper>
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="password" name="password" placeholder="Password" />
          </Box>
          <Button
            type="submit"
            look="subscribe"
            size="14px 108px"
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
