import { ButtonStyled } from './Button.styled';

export const Button = ({
  type,
  children,
  look,
  size,
  sizeTablet,
  sizeDesktop,
  fontSize,
  fontSizeTablet,
  fontSizeDesktop,
  lineHeight,
  lineHeightTablet,
}) => {
  return (
    <ButtonStyled
      type={type}
      look={look}
      size={size}
      sizeTablet={sizeTablet}
      sizeDesktop={sizeDesktop}
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
      fontSizeDesktop={fontSizeDesktop}
      lineHeight={lineHeight}
      lineHeightTablet={lineHeightTablet}
    >
      {children}
    </ButtonStyled>
  );
};
