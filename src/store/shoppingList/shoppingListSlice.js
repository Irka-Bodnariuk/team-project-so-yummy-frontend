import { createSlice } from '@reduxjs/toolkit';
import { deleteItem, getList } from './shoppingListOperations';

const initialState = {
  items: [
    {
      ttl: 'Lemon',
      desc: 'A citrus fruit with a tough, bright orange rind and juicy, pulpy flesh that can be eaten raw or used in cooking and baking.',
      thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564856/pe7f650op8xe8dq8kzkf.png',
      t: 'test',
    },
  ],
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
        // state.items = [];
      })
      .addCase(getList.fulfilled, (state, action) => {
        // state.items = action.payload.shoppingList;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
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
