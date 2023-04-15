import { useState, useEffect } from 'react';

import { deleteMyRecipe, getMyRecipes } from 'api/index';
import MyRecipeItem from 'components/RecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import { List, ListText, LoaderBox } from '../FavoriteList/FavoriteList.styled';

const MyRecipesList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage ] = useState(null);


   useEffect(() => {
      const renderMovies = async () => {
        setLoading(true);
        try {
          const data = await getMyRecipes();

          setAllRecipes(data);

          const totalCountPage = Math.ceil(data.total / 4);
          if (totalCountPage > 1) {
             setTotalPage(totalCountPage);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      renderMovies();
    }, []);

  const handleDelete = async id => {
    try {
      await deleteMyRecipe(id);
      const data = await getMyRecipes(); 
      console.log(data);
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setPage(e.selected + 1);
  };

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes !== 0 && !loading ? (
        allRecipes?.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handleDelete={handleDelete}
            styleDel="green"
            styleBtn="dark"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {totalPage && (
        <Pagination pageCount={totalPage} page={page} change={handleChange} />
      )}
    </List>
  );
};

export default MyRecipesList;
