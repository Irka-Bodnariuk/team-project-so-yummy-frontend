import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useState } from 'react';

import { ButtonMenu, Container, Wrap, MenuIcon } from './Header.styled';
import BurgerMenu from './BurgerMenu';
import { useMedia } from 'hooks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktopScreen } = useMedia();

  const handleMenuClick = () => {
    setIsMenuOpen(state => !state);
  };

  return (
    <>
      <Container>
        <Logo />
        {isDesktopScreen && <Navigation handleMenuClick={handleMenuClick} />}

        <Wrap>
          <UserLogo />
          <ButtonMenu onClick={handleMenuClick}>
            <MenuIcon />
          </ButtonMenu>
          {isDesktopScreen && <ThemeToggler />}
        </Wrap>
      </Container>
      {isMenuOpen && !isDesktopScreen && (
        <BurgerMenu handleClick={handleMenuClick} />
      )}
    </>
  );
};

export default Header;
