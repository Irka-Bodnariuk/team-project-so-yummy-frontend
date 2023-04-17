import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipeById,
  selectRecipeIsLoading,
  selectRecipeError,
  selectOwnRecipeById,
} from 'store/recipe/recipeSelectors';
import { getRecipeById, getOwnRecipeById } from 'store/recipe/recipeOperation';
import GoToTop from 'helpers/scrollToTop';
import { Loader } from 'components/Loader/Loader';
import { ShowToastError } from 'helpers/showToastError';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);
  const isLoading = useSelector(selectRecipeIsLoading);
  const error = useSelector(selectRecipeError);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [isOwn, setIsOwn] = useState(false);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    dispatch(getOwnRecipeById(recipeId))
      .unwrap()
      .then(() => setIsOwn(true))
      .catch(err => err);
  }, [recipeId, dispatch]);

  useEffect(() => {
    setCurrentRecipe(recipe ?? ownRecipe);
  }, [recipe, ownRecipe]);

  useEffect(() => {
    if (currentRecipe !== null) {
      const { ingredients, ingredientsParse } = currentRecipe;
      setCurrentIngredients(ingredients ?? ingredientsParse);
    }
  }, [currentRecipe]);

  console.log(isOwn);

  return (
    <>
      <GoToTop />
      {isLoading && <Loader pageHeight="100vh" />}
      {currentRecipe !== null && (
        <div>
          <RecipePageHero recipe={currentRecipe} isOwn={isOwn} />
          <RecipeIngredientsList ingredients={currentIngredients} />
          <RecipePreparation recipe={currentRecipe} />
        </div>
      )}
      {recipe && ownRecipe && error && (
        <ShowToastError msg="Can't upload recipe" />
      )}
    </>
  );
};

export default RecipePage;
