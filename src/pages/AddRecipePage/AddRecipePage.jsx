import MainTitle from 'components/MainTitle/MainTitle';
import { Box } from 'components/Box';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import FollowUs from 'components/Layout/Footer/FollowUs/FollowUs';
import {
  ContainerForm,
  ContainerPopular,
  SharedContainer,
  Page,
  SocialsTitle,
} from './AddRecipePage.styled';

const AddRecipePage = () => {
  return (
    <Page>
      <MainTitle text="Add recipe" />
      <SharedContainer>
        <ContainerForm>
          <AddRecipeForm />
        </ContainerForm>
        <ContainerPopular>
          <>
            <SocialsTitle>Follow us</SocialsTitle>
            <FollowUs />
          </>
          <PopularRecipe />
        </ContainerPopular>
      </SharedContainer>
    </Page>
  );
};

export default AddRecipePage;
