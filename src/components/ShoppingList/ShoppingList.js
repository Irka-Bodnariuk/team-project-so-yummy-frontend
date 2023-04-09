import { useSelector } from 'react-redux';
import { ShoppingListItem } from './ShoppingListItem';
import { Box } from 'components/Box';

export const ShoppingList = () => {
  const { items } = useSelector(state => state.shoppings);

  return (
    <Box as={'ul'}>
      {items.map(item => (
        <ShoppingListItem key={item.ttl} item={item} />
      ))}
    </Box>
  );
};
