import CategoryCardStyled from './CategoryCardStyled';
import { useState, useEffect } from 'react';
import { RecipeStyled } from './CategoryCardStyled';

const CategoryCard = ({ name, popular }) => {
  const [number, setNumber] = useState(1);

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
      <h2>{name}</h2>
      <div>
        {popular.slice(0, number).map(recipe => (
          <RecipeStyled imgUrl={recipe.preview} key={recipe.id}>
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
