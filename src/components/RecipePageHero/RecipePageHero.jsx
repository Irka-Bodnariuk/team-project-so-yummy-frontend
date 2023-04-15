import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorite,
  selectIsLoading,
  selectError,
} from 'store/recipe/recipeSelectors';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorite,
} from 'store/recipe/recipeOperation';
import { Loader } from 'components/Loader/Loader';
import { ShowToastError } from 'helpers/showToastError';
import { Box } from 'components/Box';
import { MainPageTitle } from './MainPageTitle/MainPageTitle';
import { Button } from 'components/Button/Button';
import { TbClockHour4 } from 'react-icons/tb';
import { Hero, Description, Time } from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [currentFavorite, setCurrentFavorite] = useState(recipe.favorite);

  const handleAddToFavorite = () => {
    dispatch(addRecipeToFavorite(recipe._id));
    setCurrentFavorite(!favorite);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeRecipeFromFavorite(recipe._id));
    setCurrentFavorite(!favorite);
  };

  return (
    <Hero>
      <MainPageTitle title={recipe.title} />
      <Description>{recipe.description}</Description>
      <Box mb={42}>
        {currentFavorite ? (
          <Button
            type="button"
            fontSize="10px"
            look="rounded_other"
            width="150px"
            heigth="35px"
            lineHeight="15px"
            onClick={handleRemoveFavorite}
          >
            {isLoading ? <Loader size="30" /> : 'Remove From Favorite'}
          </Button>
        ) : (
          <Button
            type="button"
            fontSize="10px"
            look="rounded_other"
            width="150px"
            heigth="35px"
            lineHeight="15px"
            onClick={handleAddToFavorite}
          >
            {isLoading ? <Loader size="30" /> : 'Add To Favorite'}
          </Button>
        )}
      </Box>
      <Time>
        <TbClockHour4 />
        {`${recipe.time} min`}
      </Time>
      {error && <ShowToastError msg="Failed to add to favorite" />}
    </Hero>
  );
};

RecipePageHero.propTypes = {};
