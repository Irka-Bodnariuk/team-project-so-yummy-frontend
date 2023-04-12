import { useMedia } from 'hooks';
import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  Wrap,
  Text,
} from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const pageList = [
  {
    to: '/categories',
    text: 'Categories',
  },
  {
    to: '/add',
    text: 'Add recipes',
  },
  {
    to: '/my',
    text: 'My recipes',
  },
  {
    to: '/favorite',
    text: 'Favorites',
  },
  {
    to: '/shopping-list',
    text: 'Shopping list',
  },
  {
    to: '/search',
    text: 'Search',
  },
];

const Navigation = ({ handleClick }) => {
  const { pathname } = useLocation();
  const { isDesktopScreen } = useMedia();
  // const darkMode = useSelector(state => state.theme);

  const onDesktop = () => {
    if (!isDesktopScreen) {
      handleClick();
    }
  };

  return (
    <Container>
      <List>
        {pageList.map(({ to, text }) => (
          <Item onClick={() => onDesktop()} key={to}>
            <Link to={to} pathname={pathname}>
              {text !== 'Search' || isDesktopScreen ? (
                <>{text !== 'Search' ? <Text>{text}</Text> : <SearchIcon />}</>
              ) : (
                <>
                  {isDesktopScreen ? (
                    <SearchIcon />
                  ) : (
                    <Wrap>
                      <SearchIcon />
                      <Text>{text}</Text>
                    </Wrap>
                  )}
                </>
              )}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
