import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategoryList = createAsyncThunk(
  'add/getCategoryList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredientsList = createAsyncThunk(
  'add/getIngredientsList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ingredients/list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'add/addRecipe',
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post('/own-recipes', { ...recipe });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
