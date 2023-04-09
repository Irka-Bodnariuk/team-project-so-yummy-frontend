import { IoClose } from 'react-icons/io5';
import { Descriptions, ImageItem, ShoppingItem } from './ShoppingList.styled';
import { useSelector } from 'react-redux';

export const ShoppingListItem = ({ item }) => {
  const darkMode = useSelector(state => state.theme);

  const handleDeleteItem = () => {};

  return (
    <ShoppingItem>
      <Descriptions>
        <ImageItem src={item.thb} alt={item.ttl} />
        <p>{item.ttl}</p>
      </Descriptions>
      <div>
        <span>5</span>
        <button onClick={handleDeleteItem}>
          <IoClose
            size={24}
            color={darkMode.darkMode ? '#FAFAFA' : '#333333'}
          />
        </button>
      </div>
    </ShoppingItem>
  );
};
