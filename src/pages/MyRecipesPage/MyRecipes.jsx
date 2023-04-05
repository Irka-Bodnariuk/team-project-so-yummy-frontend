import MyRecipesList from 'components/RecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../FavoritePage/Favorite.styled';

const MyRecipes = () => (
  <Page>
    <MainTitle text="My recipes" />
    <MyRecipesList />
  </Page>
);

export default MyRecipes;
