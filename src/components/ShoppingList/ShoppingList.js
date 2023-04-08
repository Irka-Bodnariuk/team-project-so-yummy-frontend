import React from 'react';
import { ShoppingListItem } from './ShoppingListItem';
import { Box } from 'components/Box';

export const ShoppingList = () => {
  return (
    <Box as={'ul'}>
      <ShoppingListItem />
    </Box>
  );
};
