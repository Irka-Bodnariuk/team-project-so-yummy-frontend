import { useDispatch } from 'react-redux';
import { Container, Switch } from './ThemeToggler.styled';
import { toggleTheme } from 'store/theme/ThemeSlice';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Switch type="checkbox" onChange={() => dispatch(toggleTheme())} />
    </Container>
  );
};

export default ThemeToggler;
