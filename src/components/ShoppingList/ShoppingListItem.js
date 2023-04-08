import { IoClose } from 'react-icons/io5';
import { Descriptions, ShoppingItem } from './ShoppingList.styled';
import { BlankIcon } from 'components/BlankIcon';

export const ShoppingListItem = () => {
  const handleDeleteItem = () => {};

  return (
    <ShoppingItem>
      <Descriptions>
        <BlankIcon name={'banana'} size={'s'} />
        <p>Avocado</p>
      </Descriptions>
      <div>
        <span>5</span>
        <button onClick={handleDeleteItem}>
          <IoClose size={24} />
        </button>
      </div>
    </ShoppingItem>
  );
};
