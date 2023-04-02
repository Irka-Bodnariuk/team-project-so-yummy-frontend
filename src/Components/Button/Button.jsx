import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, look, size }) => {
  return (
    <ButtonStyled type="button" look={look} size={size}>
      {children}
    </ButtonStyled>
  );
};
