import { useParams } from 'react-router-dom';
import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  Wrap,
} from './Navigation.styled';



const Navigation = () => {

  const {category = 'beef'} = useParams()

  const pageList = [
  {
    to: `/categories/${category}`,
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
