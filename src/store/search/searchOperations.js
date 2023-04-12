// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://team-project-so-yummy-backend.onrender.com/api';

export const patchRecipeFavoriteById = async id => {
  try {
    const { data } = await axios.patch(`recipes/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const patchRecipeLikeById = async id => {
  try {
    const { data } = await axios.patch(`/recipes/like/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSearchByTitle = async (
  query,
  page = 1,
  limit = 12,
  sort = 'popular'
) => {
  try {
    const { data } = await axios.get(
      `recipes/search/title/${query.trim()}?page=${page}&limit=${limit}&sort=${sort}`
    );

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSearchByIngredients = async (
  query,
  page = 1,
  limit = 12,
  sort = 'popular'
) => {
  try {
    const { data } = await axios.get(
      `/recipes/search/ingredient/${query.trim()}?page=${page}&limit=${limit}&sort=${sort}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
