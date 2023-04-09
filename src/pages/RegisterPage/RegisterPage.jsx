import React from 'react';

import { AuthForm } from 'components/AuthForm/AuthForm';

import { AuthMain, AuthImage, AuthBackground } from './RegisterPage.styled';

export const RegisterPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
