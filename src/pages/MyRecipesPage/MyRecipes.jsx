import MyRecipesList from 'components/RecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../FavoritePage/Favorite.styled';

export const MyRecipes = () => (
  <Page>
    <MainTitle text="My recipes" />
    <MyRecipesList />
  </Page>
);
