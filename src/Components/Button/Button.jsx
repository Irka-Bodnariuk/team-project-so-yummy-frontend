import { ButtonStyled } from './Button.styled';

export const Button = ({
  children,
  look,
  size,
  sizeTablet,
  fontSize,
  fontSizeTablet,
  lineHeight,
  lineHeightTablet,
}) => {
  return (
    <ButtonStyled
      type="button"
      look={look}
      size={size}
      sizeTablet={sizeTablet}
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
    >
      {children}
    </ButtonStyled>
  );
};

 
