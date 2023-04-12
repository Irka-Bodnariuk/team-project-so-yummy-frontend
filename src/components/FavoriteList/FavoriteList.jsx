import { useEffect, useState } from 'react';

import { getFavoriteRecipes, deleteFavoriteRecipe } from 'api/index';
import MyRecipeItem from '../RecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';

import { List, ListText, LoaderBox } from './FavoriteList.styled.js';

const FavoriteList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);

  const getFavorites = async () => {
    try {
      setLoading(false);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handelDelete = async id => {
    try {
      await deleteFavoriteRecipe(id);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes.length !== 0 &&
        !loading &&
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handelDelete={handelDelete}
            styleDel="black"
            styleBtn="normal"
          />
        ))}
      {allRecipes.length === 0 && !loading && (
        <ListText>You don't have your recipes</ListText>
      )}
    </List>
  );
};

export default FavoriteList;
