// import getCategoryList from 'api/recipes/getCategoryList';
// import { useState, useEffect } from 'react';
import CategoryCard from 'components/CategoryCard/CategoryCard';
import PreviewCategoriesStyled from './PreviewCategoriesStyled';

const PreviewCategories = () => {
  // const [categories, setCategories] = useState([]);

  const popularCategories = ['Breakfast', 'Miscellaneous', 'Vegan', 'Dessert'];

  // const makeCategoriesList = async () => {
  //   const list = await getCategoryList();
  //   setCategories(list);
  // };

  // useEffect(() => {
  //   makeCategoriesList();
  // }, []);

  return (
    <PreviewCategoriesStyled>
      {popularCategories.length > 0 &&
        popularCategories.map(category => (
          <CategoryCard key={category + '_key'} category={category} />
        ))}
      <span>
        <button>Other categories</button>
      </span>
    </PreviewCategoriesStyled>
  );
};

export default PreviewCategories;
