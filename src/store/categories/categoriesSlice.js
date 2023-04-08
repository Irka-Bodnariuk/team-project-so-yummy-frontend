import { createSlice } from "@reduxjs/toolkit";
import { get } from "immer/dist/internal";
import { getCategories } from "./operations";

const handlePending = (state) => {
  state.recipeCategories = [];
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
    items: [],
    recipeCategories: [],
    searchByTitle: [],
    searchByIngredient: [],
    isLoading: false,
    recipeCategoriesIsLoading: false,
    error: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending]: handlePending,
        [getCategories.fullfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [getCategories.rejected]: handleRejected,

    }
});


export const categoriesReducer = categoriesSlice.reducer;