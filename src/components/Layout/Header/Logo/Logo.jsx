import { useMedia } from 'hooks';
import { MainIcon, FooterIcon } from 'images/svgIcons';

import { NavLink, useLocation } from 'react-router-dom';
import { WrapLogo } from './Logo.styled';

const Logo = ({ handleClick }) => {
  const { pathname } = useLocation();
  const { isMobileScreen, isDesktopScreen } = useMedia();
  const onDesktop = () => {
    if (!isDesktopScreen) {
      handleClick();
    }
  };
  return (
    <NavLink onClick={() => onDesktop()} to="/main">
      {isMobileScreen ? (
        <>
          {pathname === '/main' ? (
            <WrapLogo>
              <FooterIcon mobile={isMobileScreen} />
            </WrapLogo>
          ) : (
            <MainIcon mobile={isMobileScreen} />
          )}
        </>
      ) : (
        <MainIcon mobile={isMobileScreen} />
      )}
    </NavLink>
  );
};

export default Logo;
