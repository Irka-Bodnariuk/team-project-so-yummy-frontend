import CategoryCardStyled from './CategoryCardStyled';
import getCategory from 'api/recipes/getCategory';
import { useState, useEffect } from 'react';

const CategoryCard = ({ category }) => {
  const [categoryInfo, setCategoryInfo] = useState('');

  const makeInfo = async () => {
    const categoryData = await getCategory(category);
    const recipes = categoryData.recipes;
    setCategoryInfo(recipes[0]);
  };

  useEffect(() => {
    makeInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <CategoryCardStyled imgUrl={categoryInfo.preview}>
      <h2>{category}</h2>
      <div>
        <span>{categoryInfo.title}</span>
      </div>
      <button>
        <span>See all</span>
      </button>
    </CategoryCardStyled>
  );
};

export default CategoryCard;
