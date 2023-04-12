import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useState } from 'react';

import {
  ButtonMenu,
  Container,
  Wrap,
  MenuIcon,
  ContainerHeader,
} from './Header.styled';
import BurgerMenu from './BurgerMenu';
import { useMedia } from 'hooks';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktopScreen } = useMedia();

  const handleMenuClick = () => {
    setIsMenuOpen(state => !state);
  };

  return (
    <ContainerHeader>
      <Container>
        <Logo />
        {isDesktopScreen && <Navigation handleMenuClick={handleMenuClick} />}

        <Wrap>
          <UserLogo />
          <ButtonMenu onClick={handleMenuClick}>
            <MenuIcon pathname={pathname} />
          </ButtonMenu>
          {isDesktopScreen && <ThemeToggler />}
        </Wrap>
      </Container>
      {isMenuOpen && !isDesktopScreen && (
        <BurgerMenu handleClick={handleMenuClick} />
      )}
    </ContainerHeader>
  );
};

export default Header;
