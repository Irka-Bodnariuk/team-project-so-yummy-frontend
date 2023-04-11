import { useMedia } from 'hooks';
import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  Wrap,
} from './Navigation.styled';
import { useLocation } from 'react-router';

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

const Navigation = () => {
  const { isDesktopScreen } = useMedia();
  const { pathname } = useLocation();

  return (
    <Container>
      <List>
        {pageList.map(({ to, text }) => (
          <Item key={to}>
            {pathname === to ? (
              <Link to={to} className="active">
                {text !== 'Search' || !isDesktopScreen ? (
                  text
                ) : (
                  <Wrap>
                    <SearchIcon />
                  </Wrap>
                )}
              </Link>
            ) : (
              <Link to={to}>
                {text !== 'Search' || !isDesktopScreen ? (
                  text
                ) : (
                  <Wrap>
                    <SearchIcon />
                  </Wrap>
                )}
              </Link>
            )}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
