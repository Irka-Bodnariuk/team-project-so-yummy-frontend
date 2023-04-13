import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCategory,
  selectError,
  selectIngredients,
} from 'store/addRecipe/addRecipeSelectors';
import {
  getCategoryList,
  getIngredientsList,
  addRecipe,
} from 'store/addRecipe/addRecipeOperation';
import { Formik } from 'formik';
import {
  createOptionCategory,
  createOptionTimes,
  createOptionMeasure,
  createOptionIngredients,
} from 'helpers/createOptionsSelectAddRecipeForm';
import { validationSchema } from 'helpers/validationSchemaAddRecipeForm';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreapationFields } from './RecipePreapationFields/RecipePreapationFields';
import { Button } from 'components/Button/Button';
import { ShowToastError } from 'helpers/showToastError';
import { createArrTimesPrepare } from 'helpers/createArrTimesPrepare';
import { RecipeForm } from './AddRecipeForm.styled';

const initialValues = {
  file: '',
  title: '',
  about: '',
  category: 'breakfast',
  time: '40',
  ingredients: [{ quantity: '', measure: 'tbs', id: '' }],
  preparation: [],
};

export const AddRecipeForm = props => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategory);
  const ingredientsList = useSelector(selectIngredients);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getIngredientsList());
  }, [dispatch]);

  const optionsCategory = createOptionCategory(categoryList);
  const optionsTimes = createOptionTimes(createArrTimesPrepare(5, 120, 5));
  const optionsIngredients = createOptionIngredients(ingredientsList);
  const optionMesure = createOptionMeasure();

  const handleSubmit = (values, actions) => {
    const { file, title, about, category, time, ingredients, preparation } =
      values;
    const instructions = preparation.join('\n');
    const ingredientsList = ingredients.map(item => ({
      id: item.id,
      measure: `${item.quantity} ${item.measure}`,
    }));
    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', about);
    formData.append('instructions', instructions);
    formData.append('preview', file);
    formData.append('thumb', file);
    formData.append('time', time);
    formData.append('ingredients', JSON.stringify(ingredientsList));

    const dataFile = Object.fromEntries(formData.entries());
    console.log(dataFile);

    dispatch(addRecipe(formData));
    // .unwrap()
    // .then(res => res)
    // .catch(() => <ShowToastError msg="Ooops.. It try again" />);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <RecipeForm>
            <RecipeDescriptionFields
              setFieldValue={setFieldValue}
              values={values}
              optionsCategory={optionsCategory}
              optionsTimes={optionsTimes}
            />
            <RecipeIngredientsFields
              optionsIngredients={optionsIngredients}
              optionMesure={optionMesure}
              values={values}
            />
            <RecipePreapationFields setFieldValue={setFieldValue} />
            <Button
              type="submit"
              look="rounded"
              width="129px"
              widthTablet="161px"
              heigthTablet="52px"
              heigth="46px"
              fontSize="16px"
              lineHeight="24px"
            >
              Add
            </Button>
          </RecipeForm>
        )}
      </Formik>
      {error && <ShowToastError msg="Ooops.. Something went wrong" />}
    </>
  );
};

AddRecipeForm.propTypes = {};
