import { useMedia } from 'hooks';
import { MainIcon } from 'images/svgIcons';

import { NavLink } from 'react-router-dom';

const Logo = ({ handleClick }) => {
  const { isMobileScreen, isDesktopScreen } = useMedia();
  const onDesktop = () => {
    if (!isDesktopScreen) {
      handleClick();
    }
  };
  return (
    <NavLink onClick={() => onDesktop()} to="/main">
      <MainIcon mobile={isMobileScreen} />
    </NavLink>
  );
};

export default Logo;
