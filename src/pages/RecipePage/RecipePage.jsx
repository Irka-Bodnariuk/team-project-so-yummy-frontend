import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipeById,
  selectRecipeIsLoading,
  selectRecipeError,
} from 'store/recipe/recipeSelectors';
import { getRecipeById } from 'store/recipe/recipeOperation';
import { Loader } from 'components/Loader/Loader';
import { ShowToastError } from 'helpers/showToastError';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const isLoading = useSelector(selectRecipeIsLoading);
  const error = useSelector(selectRecipeError);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId, dispatch]);

  return (
    <>
      {isLoading && <Loader pageHeight="100vh" />}
      {recipe !== null && (
        <div>
          <RecipePageHero recipe={recipe} />
          <RecipeIngredientsList ingredients={recipe.ingredients} />
          <RecipePreparation recipe={recipe} />
        </div>
      )}
      {error && <ShowToastError msg="Ooops.. Can't upload recipe" />}
    </>
  );
};

export default RecipePage;
