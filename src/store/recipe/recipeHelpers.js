import {
  getRecipeById,
  addRecipeToFavorite,
  removeRecipeFromFavorite,
  addToShoppingList,
  removeFromShoppingList,
} from './recipeOperation';

const extraActions = [
  getRecipeById,
  addRecipeToFavorite,
  removeRecipeFromFavorite,
  addToShoppingList,
  removeFromShoppingList,
];
export const getActions = type => extraActions.map(action => action[type]);

export const getRecipeByIdFulfilledReducer = (state, action) => {
  state.recipe = action.payload;
  state.favorite = action.payload.favorite;
  state.recipeError = null;
};
export const getRecipeByIdRejectedReducer = (state, action) => {
  state.recipeError = action.payload;
};

export const addRecipeToFavoriteFulfilledReducer = state => {
  state.favorite = true;
};
export const removeRecipeFromFavoriteFulfilledReducer = state => {
  state.favorite = false;
};

export const addToShoppingListFulfilledReducer = (state, action) => {
  state.inCart = action.payload;
};

export const removeFromShoppingListFulfilledReducer = (state, action) => {
  state.inCart = action.payload;
};
