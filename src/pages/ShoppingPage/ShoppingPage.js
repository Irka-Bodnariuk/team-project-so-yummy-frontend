import React from 'react';
import MainTitle from 'components/MainTitle/MainTitle';
import { TableHeader, TableTitle } from './ShoppingPage.styled';
import { useMedia } from 'hooks';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';

export const ShoppingPage = () => {
  const { screenType } = useMedia();

  const titles = ['Product', 'Number', 'Remove'];

  return (
    <main>
      <MainTitle text={'Shopping list'} />
      <TableHeader>
        {titles.map(title => (
          <TableTitle key={title} screenType={screenType}>
            {title}
          </TableTitle>
        ))}
      </TableHeader>
      <ShoppingList />
    </main>
  );
};
