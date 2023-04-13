import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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

    const data = {
      title,
      category,
      description: about,
      instructions,
      thumb: file,
      preview: file,
      time,
      ingredients: ingredientsList,
    };
    dispatch(addRecipe(data));
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
            <button type="submit">add</button>
          </RecipeForm>
        )}
      </Formik>
      {error && toast.error('Ooops.. Something went wrong')}
    </>
  );
};

AddRecipeForm.propTypes = {};
