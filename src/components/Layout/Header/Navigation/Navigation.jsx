import {
  Container,
  List,
  Link,
  Item,
  SearchIcon,
  MenuIcon,
} from './Navigation.styled';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(true);
  }, []);
  return (
    <Container>
      {!isMobile ? (
        <Container>
          <Container>
            <List>
              <Item>
                <Link to="/categories">Categories</Link>
              </Item>
              <Item>
                <Link to="/add">Add recipes</Link>
              </Item>
              <Item>
                <Link to="/my">My recipes</Link>
              </Item>
              <Item>
                <Link to="/favorite">Favorites</Link>
              </Item>
              <Item>
                <Link to="/shopping-list">Shopping list</Link>
              </Item>
              <Item>
                <Link to="/search">
                  <Container>
                    <SearchIcon />
                  </Container>
                </Link>
              </Item>
            </List>
          </Container>
        </Container>
      ) : (
        <Container>
          <Container>
            <MenuIcon />
            {/* <AddSvg name="icon-menu-03" width={28} height={28} /> */}
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Navigation;
