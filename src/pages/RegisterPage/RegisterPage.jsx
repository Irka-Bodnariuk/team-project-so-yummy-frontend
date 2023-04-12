import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsSend, selectEmail } from 'store/auth/authSelectors';

import { AuthForm } from 'components/AuthForm/AuthForm';
import {
  AuthMain,
  AuthImage,
  AuthBackground,
  StyledToastContainer,
} from './RegisterPage.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterPage = () => {
  const isSent = useSelector(selectIsSend);
  const currentEmail = useSelector(selectEmail);

  useEffect(() => {
    isSent &&
      toast.success(`A verification email has been sent to ${currentEmail}`);
  }, [isSent, currentEmail]);

  return (
    <>
      <StyledToastContainer />
      <AuthMain>
        <AuthImage></AuthImage>
        <AuthForm />
        <AuthBackground></AuthBackground>
      </AuthMain>
    </>
  );
};
