import { createSlice } from '@reduxjs/toolkit';
import { deleteItem, getList } from './shoppingListOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const shoppingsSlice = createSlice({
  name: 'shoppings',
  initialState,
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(getList.pending, state => {
        state.items = [];
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.items = action.payload.shoppingList;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item.id !== action.payload.productId
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      }),
});

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

export const shoppingsReducer = shoppingsSlice.reducer;
