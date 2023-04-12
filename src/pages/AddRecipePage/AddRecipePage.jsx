import MainTitle from 'components/MainTitle/MainTitle';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';

const AddRecipePage = () => {
  return (
    <div>
      <MainTitle text="Add recipe" />
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
