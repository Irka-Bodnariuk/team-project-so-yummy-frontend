import { getCategoryList } from './addRecipeOperation';

const extraActions = [getCategoryList];
export const getActions = type => extraActions.map(action => action[type]);

export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const getCategoryFulfilledReducer = (state, action) => {
  state.category = action.payload;
};

export const getIngredientsFulfilledReducer = (state, action) => {
  state.ingredients = action.payload;
};
