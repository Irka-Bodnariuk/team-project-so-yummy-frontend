import Logo from '../Logo/Logo';
// import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { Nav, Link, Wrapper, LogoWrapper } from './BurgerMenu.styled';

const BurgerMenu = ({ handleClick }) => {
  return (
    <Wrapper>
    {/* <ThemeToggler /> */}
    <LogoWrapper>
      <Logo />
      <span width="32" height="32" onClick={() => handleClick()}>&#10006;</span>
    </LogoWrapper>  
      <Nav>
        <Link to="/categories">Categories</Link>
        <Link to="/add-recipes">Add recipes</Link>
        <Link to="/my-recipes">My recipes</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/shoping-list">Shoping list</Link>
        <Link to="/search">Search</Link>
      </Nav>
    </Wrapper>
  );
};

export default BurgerMenu;