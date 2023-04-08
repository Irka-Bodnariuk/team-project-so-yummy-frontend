import { IoClose } from 'react-icons/io5';
import {
  Descriptions,
  ImageItem,
  ShoppingItem,
  Bage,
  CloseButton,
} from './ShoppingList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from 'store/shoppingList/shoppingListOperations';

export const ShoppingListItem = ({ item }) => {
  const darkMode = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleDeleteItem = id => {
    dispatch(deleteItem(id));
  };

  return (
    <ShoppingItem>
      <Descriptions>
        <ImageItem src={item.thb} alt={item.ttl} />
        <p>{item.ttl}</p>
      </Descriptions>
      <div>
        <Bage>
          {item.meassure.map(item => (
            <span>{item}</span>
          ))}
        </Bage>
        <CloseButton
          dark={darkMode.darkMode}
          onClick={() => handleDeleteItem(item.productId)}
        >
          <IoClose size={24} />
        </CloseButton>
      </div>
    </ShoppingItem>
  );
};
