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
  lineHeightDesktop,
}) => {
  if (to) {
    return (
      <LinkStyled
        to={to}
        type={type}
        width={width}
        width_tablet={widthTablet}
        width_desktop={widthDesktop}
        height={heigth}
        heigth_tablet={heigthTablet}
        heigth_desktop={heigthDesktop}
        look={look}
        fsize={fontSize}
        fsize_tablet={fontSizeTablet}
        fsize_desktop={fontSizeDesktop}
        lineheight={lineHeight}
        lineheight_tablet={lineHeightTablet}
        lineheight_desktop={lineHeightDesktop}
      >
        {children}
      </LinkStyled>
    );
  }
  return (
    <ButtonStyled
      type={type}
      width={width}
      width-tablet={widthTablet}
      width-desktop={widthDesktop}
      height={heigth}
      heigth-tablet={heigthTablet}
      heigth-desktop={heigthDesktop}
      look={look}
      fontSize={fontSize}
      fontsize-tablet={fontSizeTablet}
      fontsize-desktop={fontSizeDesktop}
      lineheight={lineHeight}
      lineheight-tablet={lineHeightTablet}
      lineheight-desktop={lineHeightDesktop}
    >
      {children}
    </ButtonStyled>
  );
};
