import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  Wrap,
} from './Navigation.styled';

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
    text: null,
  },
];

const Navigation = () => {
  return (
    <Container>
      <List>
        {pageList.map(({ to, text }) => (
          <Item key={to}>
            <Link to={to}>
              {text ? (
                text
              ) : (
                <Wrap>
                  <SearchIcon />
                </Wrap>
              )}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
