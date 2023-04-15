import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipeById, selectError } from 'store/recipe/recipeSelectors';
import { getRecipeById } from 'store/recipe/recipeOperation';
import { ShowToastError } from 'helpers/showToastError';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId, dispatch]);

  return (
    <>
      {recipe !== null && (
        <div>
          <RecipePageHero recipe={recipe} />
          <RecipeIngredientsList ingredients={recipe.ingredients} />
          <RecipePreparation recipe={recipe} />
        </div>
      )}
      {error && <ShowToastError msg="Ooops.. Something went wrong" />}
    </>
  );
};

export default RecipePage;
