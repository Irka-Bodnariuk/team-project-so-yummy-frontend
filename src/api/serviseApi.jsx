import axios from 'axios';

export const getFavoriteRecipes = async () => {
  try {
    const { data } = await axios.get(`/favorite`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.put(`favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async (page = 1, limit = 4) => {
  try {
    const { data } = await axios.get(
      `/recipes/own-recipes?page=${page}&limit=${limit}`
    );
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    const { data } = await axios.delete(`/recipes/own-recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSubscribe = async () => {
  try {
    const { data } = await axios.patch('/subscribe');
    return data;
  } catch (error) {
    console.log(error);
  }
};
