import CategoryCardStyled from './CategoryCardStyled';
import getCategory from 'api/recipes/getCategory';
import { useState, useEffect } from 'react';
import { RecipeStyled } from './CategoryCardStyled';

const CategoryCard = ({ category }) => {
  const [recipeFullBase, setRecipeFullBase] = useState([]);
  const [number, setNumber] = useState(1);

  const makeRecipeList = async () => {
    const categoryData = await getCategory(category);
    const recipes = categoryData.recipes;
    setRecipeFullBase(recipes.slice(0, 4));
    resizeHandler();
  };

  useEffect(() => {
    makeRecipeList();
    // eslint-disable-next-line
  }, []);

  const resizeHandler = async () => {
    if (window.screen.width < 768) {
      setNumber(1);
    }
    if (window.screen.width >= 768 && window.screen.width < 1440) {
      setNumber(2);
    }
    if (window.screen.width >= 1440) {
      setNumber(4);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <CategoryCardStyled>
      <h2>{category}</h2>
      <div>
        {recipeFullBase &&
          recipeFullBase.slice(0, number).map(recipe => (
            <RecipeStyled imgUrl={recipe.preview} key={recipe._id}>
              <span>{recipe.title}</span>
            </RecipeStyled>
          ))}
      </div>
      <button>
        <span>See all</span>
      </button>
    </CategoryCardStyled>
  );
};

export default CategoryCard;
