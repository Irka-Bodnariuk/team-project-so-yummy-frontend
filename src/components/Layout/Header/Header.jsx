import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';

import { ButtunMenu, Container, Wrap, MenuIcon } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navigation />
      <Wrap>
        <UserLogo />
        <ButtunMenu>
          <MenuIcon />
        </ButtunMenu>
        <ThemeToggler />
      </Wrap>
    </Container>
  );
};

export default Header;
