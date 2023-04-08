import { useState } from 'react';
// import { useLocation } from 'react-router';

import { getMyRecipes, deleteMyRecipe } from 'api/index';
import MyRecipeItem from 'components/RecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';

import { List, ListText, LoaderBox } from '../FavoriteList/FavoriteList.styled';

const MyRecipesList = () => {
  const [loading, ] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, ] = useState(null);
  // const location = useLocation();

  //  useEffect(() => {
  //     const renderMovies = async () => {
  //       setLoading(true);
  //       try {
  //         const data = await getMyRecipes(page);
  //         setAllRecipes(data);

  //         const totalCountPage = Math.ceil(data.total / 4);
  //         if (totalCountPage > 1) {
  //           setTotalPage(totalCountPage);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     renderMovies();
  //   }, [page]);

  const handelDelete = async id => {
    try {
      await deleteMyRecipe(id);
      const data = await getMyRecipes(page);
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes.length !== 0 && !loading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handelDelete={handelDelete}
            styleDel="white"
            styleBtn="dark"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {totalPage && (
        <div change={handleChange}>Paginator</div>
        //   <Paginator
        //     count={totalPage}
        //     page={page}
        //     change={handleChange} />
      )}
    </List>
  );
};

export default MyRecipesList;
