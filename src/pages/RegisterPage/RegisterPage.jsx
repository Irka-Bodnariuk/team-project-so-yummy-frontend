import React from 'react';

import { AuthForm } from 'components/AuthForm/AuthForm';

import { RegisterMain, RegisterImage, RegisterBg } from './RegisterPage.styled';

export const RegisterPage = () => {
  return (
    <RegisterMain>
      <RegisterImage></RegisterImage>
      <AuthForm />
      <RegisterBg></RegisterBg>
    </RegisterMain>
  );
};
