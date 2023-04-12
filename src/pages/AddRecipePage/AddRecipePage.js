import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../FavoritePage/Favorite.styled';

const AddRecipePage = () => (
  <Page>
    <MainTitle text="Add recipe" />
    <PopularRecipe />
  </Page>
);

export default AddRecipePage;
