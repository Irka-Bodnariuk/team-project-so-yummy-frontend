import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { useState } from 'react';

import { ButtunMenu, Container, Wrap, MenuIcon } from './Header.styled';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <Container>
      <Logo />
      <Navigation />
      <Wrap>
        <UserLogo />
        <ButtunMenu onClick={() => handleMenuClick()}>
          <MenuIcon />
        </ButtunMenu>
        <ThemeToggler />
      </Wrap>
    </Container>
    {isMenuOpen && <BurgerMenu handleClick={handleMenuClick}/>}
    </>
  );
};

export default Header;