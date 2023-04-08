import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import {
  AuthMain,
  AuthImage,
  AuthBackground,
} from 'pages/RegisterPage/RegisterPage.styled';

export const SigninPage = () => {
  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm login />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
