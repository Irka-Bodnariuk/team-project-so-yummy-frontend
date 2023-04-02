import { ButtonStyled } from './Button.styled';

export const Button = ({ children, look, type, screenType }) => {

  return (
    <ButtonStyled type={type} look={look} screenType={screenType}>
      {children}
    </ButtonStyled>
  );
};

 
