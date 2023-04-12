import axios from 'axios';

export const getFavoriteRecipes = async () => {
  try {
    const { data } = await axios.get(`/favorite`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.delete(`favorite/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyRecipes = async page => {
  try {
    const { data } = await axios.get(`/recipes/own-recipes?page=${page}`); //&limit=${limit}
    return data.data.result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    const { data } = await axios.delete(`/recipes/own-recipes/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateSubscribe = async () => {
  try {
    const { data } = await axios.patch('/subscribe');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPopularRecipes = async () => {
  try {
    const { data } = await axios.get(`/recipes/popular-recipe`);
    return data.data.result;
  } catch (error) {
    console.error(error);
  }
};
