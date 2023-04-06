import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import { Container } from './Header.styled';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(true);
  }, []);

  return (
    <Container>
      <Logo />
      {!isMobile ? (
        <Container>
          <UserLogo />
          <Navigation />
        </Container>
      ) : (
        <Container>
          <Navigation />
          <UserLogo />
        </Container>
      )}
    </Container>
  );
};

export default Header;
