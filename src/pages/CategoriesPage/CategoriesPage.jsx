import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getCategories } from 'store/categories/operations';
import { CategoriesSection, CategoriesContainer, TitleContainer} from './CategoriesPage.styled';



export const CategoriesPage = () => {
  
  const dispatch = useDispatch();
  // const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  return (
    <CategoriesSection>
      <CategoriesContainer>
        <TitleContainer>
          <div>CategoriesPage</div>
        </TitleContainer>
      </CategoriesContainer>
    </CategoriesSection>
  )
};
