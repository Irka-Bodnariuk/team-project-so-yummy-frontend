import MyRecipesList from 'components/RecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../FavoritePage/Favorite.styled';
import BGDots from 'reusableComponents/BGDots/BGDots';

const MyRecipes = () => (
  <Page>
    <BGDots />
    <MainTitle text="My recipes" />
    <MyRecipesList />
  </Page>
);

export default MyRecipes;
