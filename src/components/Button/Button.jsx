import { ButtonStyled, LinkStyled } from './Button.styled';

export const Button = ({
  type,
  to,
  children,
  look,
  width,
  widthTablet,
  widthDesktop,
  heigth,
  heigthTablet,
  heigthDesktop,
  fontSize,
  fontSizeTablet,
  fontSizeDesktop,
  lineHeight,
  lineHeightTablet,
  lineHeightDesktop
}) => {
  if (to) {
    return (
      <LinkStyled
        to={to}
        type={type}
        width={width}
        widthTablet={widthTablet}
        widthDesktop={widthDesktop}
        height={heigth}
        heigthTablet={heigthTablet}
        heigthDesktop={heigthDesktop}
        look={look}
        fontSize={fontSize}
        fontSizeTablet={fontSizeTablet}
        fontSizeDesktop={fontSizeDesktop}
      >
        {children}
      </LinkStyled>
    );
  }
  return (
    <ButtonStyled
      type={type}
      width={width}
      widthTablet={widthTablet}
      widthDesktop={widthDesktop}
      height={heigth}
      heigthTablet={heigthTablet}
      heigthDesktop={heigthDesktop}
      look={look}
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
      fontSizeDesktop={fontSizeDesktop}
      lineHeight={lineHeight}
      lineHeightTablet={lineHeightTablet}
      lineHeightDesktop={lineHeightDesktop}
    >
      {children}
    </ButtonStyled>
  );
};
