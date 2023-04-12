import axios from 'axios';

export const getFavoriteRecipes = async page => {
  try {
    const { data } = await axios.get(`/favorites?page=${page}`); //&limit=${limit}
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.put(`/favorites/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async page => {
  try {
    const { data } = await axios.get(`/recipes/own-recipes?page=${page}`); //&limit=${limit}  
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
    const { data } = await axios.patch('/subscribe',
      {
       subscribe: true
      }
      );
    return data;
  } catch (error) {
    console.log(error);
  }
}


// axios.defaults.baseURL = ' ';


export const getPopularRecipes = async () => {
  try {
    const { data } = await axios.get(`/recipes/popular-recipe`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

