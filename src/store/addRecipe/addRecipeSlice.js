import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCategoryList, getIngredientsList } from './addRecipeOperation';
import {
  getActions,
  handlePending,
  handleFulfilled,
  handleRejected,
  getCategoryFulfilledReducer,
  getIngredientsFulfilledReducer,
} from './addRecipeHelpers';

const initialState = {
  category: [],
  ingredients: [],
  isLoading: false,
  error: null,
};

const addRecipeSlice = createSlice({
  name: 'add',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategoryList.fulfilled, getCategoryFulfilledReducer)
      .addCase(getIngredientsList.fulfilled, getIngredientsFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const addRecipeReducer = addRecipeSlice.reducer;
