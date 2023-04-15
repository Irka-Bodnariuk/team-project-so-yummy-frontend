import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInCartShopping,
  selectError,
} from 'store/recipe/recipeSelectors';
import {
  addToShoppingList,
  removeFromShoppingList,
} from 'store/recipe/recipeOperation';
import { ShowToastError } from 'helpers/showToastError';
// import { BsCheckLg } from 'react-icons/bs';
import placeholder from '../../images/recipepage/placeholder.png';
import { Box } from 'components/Box';
import {
  Section,
  TableData,
  BoxTitle,
  Title,
  List,
  Item,
  IngredientTitle,
  MeasureInfo,
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const inCartShopping = useSelector(selectInCartShopping);
  const error = useSelector(selectError);

  console.log(inCartShopping);

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: checked,
    });
    console.log(checked);
    if (checked) {
      dispatch(addToShoppingList(item));
    } else dispatch(removeFromShoppingList(item.id));
  };

  return (
    <Section>
      <TableData>
        <Title>Ingredients</Title>
        <BoxTitle>
          <Title>Number</Title>
          <Title>Add to list</Title>
        </BoxTitle>
      </TableData>
      <List>
        {ingredients.map((item, idx) => (
          <Item key={item._id}>
            <Box display="flex" alignItems="center">
              <img
                src={item.thumb ?? placeholder}
                alt={item.title}
                width={65}
                height={65}
              />
              <IngredientTitle>{item.title}</IngredientTitle>
            </Box>
            <BoxTitle>
              <MeasureInfo>{item.measure}</MeasureInfo>
              <input
                type="checkbox"
                checked={checkedItems[item._id] ?? false}
                onChange={e => handleChange(e, item)}
                name={item._id}
              />
            </BoxTitle>
          </Item>
        ))}
      </List>
      {error && <ShowToastError msg="Failed to add to shopping cart" />}
    </Section>
  );
};

RecipeIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      desc: PropTypes.string.isRequired,
      measure: PropTypes.string.isRequired,
      thumb: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
