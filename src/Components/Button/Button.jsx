import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, look }) => {
  return (
    <ButtonStyled type="button" look={look}>
      {children}
    </ButtonStyled>
  );
};
