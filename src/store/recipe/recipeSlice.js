import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getRecipeById,
  addRecipeToFavorite,
  removeRecipeFromFavorite,
  addToShoppingList,
  removeFromShoppingList,
} from './recipeOperation';
import {
  getActions,
  getRecipeByIdFulfilledReducer,
  addRecipeToFavoriteFulfilledReducer,
  removeRecipeFromFavoriteFulfilledReducer,
  addToShoppingListFulfilledReducer,
  removeFromShoppingListFulfilledReducer,
} from './recipeHelpers';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from '../helpers/sharedReducerHelpers';

const initialState = {
  recipe: null,
  favorite: false,
  inCart: false,
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getRecipeById.fulfilled, getRecipeByIdFulfilledReducer)
      .addCase(addToShoppingList.fulfilled, addToShoppingListFulfilledReducer)
      .addCase(
        removeFromShoppingList.fulfilled,
        removeFromShoppingListFulfilledReducer
      )
      .addCase(
        addRecipeToFavorite.fulfilled,
        addRecipeToFavoriteFulfilledReducer
      )
      .addCase(
        removeRecipeFromFavorite.fulfilled,
        removeRecipeFromFavoriteFulfilledReducer
      )
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const recipeReducer = recipeSlice.reducer;
