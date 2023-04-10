import { useState, useEffect } from 'react';
import getCategoryList from 'api/getCategoryList';
import CategoryCard from 'components/CategoryCard/CategoryCard';
import PreviewCategoriesStyled from './PreviewCategoriesStyled';

const PreviewCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);

  const receiveCategories = async () => {
    const dataReceived = await getCategoryList();
    setPopularCategories(dataReceived);
  };

  useEffect(() => {
    receiveCategories();
  }, []);

  return (
    <PreviewCategoriesStyled>
      {popularCategories &&
        popularCategories.map(category => (
          <CategoryCard
            key={category.id}
            name={category.id}
            popular={category.firstFour}
          />
        ))}
      <span>
        <button>Other categories</button>
      </span>
    </PreviewCategoriesStyled>
  );
};

export default PreviewCategories;
