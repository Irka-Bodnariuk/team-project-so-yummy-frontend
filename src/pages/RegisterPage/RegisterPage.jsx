import React from 'react';

import { AuthForm } from 'components/AuthForm/AuthForm';

import { useMediaQuery } from 'react-responsive';
import { Mobile } from 'helpers/react-responsive';

import { RegisterMain, RegisterImage, RegisterBg } from './RegisterPage.styled';

import regImage from '../../images/mobile/auth-pana-mob-min.png';
import regImageRetina from '../../images/mobile/auth-pana-mob-ret-min.png';

export const RegisterPage = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <RegisterMain>
      <Mobile>
        {isRetina ? (
          <RegisterImage src={regImageRetina} alt="girl use so-yummy retina" />
        ) : (
          <RegisterImage src={regImage} alt="girl use so-yummy" />
        )}
      </Mobile>
      <AuthForm />
      <RegisterBg></RegisterBg>
    </RegisterMain>
  );
};
