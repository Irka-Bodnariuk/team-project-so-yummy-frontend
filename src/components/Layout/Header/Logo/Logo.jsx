import { useMedia } from 'hooks';
import { MainIcon } from 'images/svgIcons';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  const { isMobileScreen } = useMedia();
  return (
    <NavLink t0="/">
      <MainIcon mobile={isMobileScreen} />
    </NavLink>
  );
};

export default Logo;
