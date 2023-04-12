import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getRecipesByCategory } from "api/categories";

import { CategoriesList } from "components/Categories/CategoriesList/CategoriesList";
import { RecipesList } from "components/Categories/CategoriesRecipesList/CategoriesRecipesList";
import MainTitle from "components/MainTitle/MainTitle";
import { EmptyMessage } from "pages/ShoppingPage/ShoppingPage.styled";
import { Loader } from "components/Loader/Loader";





export const CategoriesPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    const getRecipes = async () => {
      try {
        const data = await getRecipesByCategory(categoryName);
        setRecipes(data.recipes);
        setLoading(false)
      } catch (error) {
        setError(error.massege)
      }
    }
    getRecipes()
  }, [categoryName]);
  

  return (
    <main>
      <MainTitle text={"Categories"} />  
      <CategoriesList />
      {loading && (
        <div
            style={{
            margin: '30px 0px',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Loader />
        </div>)} 
      {recipes.length > 0 && !loading && <RecipesList items={recipes} />}
      {error && <EmptyMessage>Something went wrong...</EmptyMessage> }

    </main>
  ) 
};
