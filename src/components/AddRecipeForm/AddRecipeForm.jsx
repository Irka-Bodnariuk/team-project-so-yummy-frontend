// import PropTypes from 'prop-types';
import { Formik } from 'formik';
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
  time: '40 min',
  ingredients: [{ quantity: '', measure: 'tbs', id: '' }],
  preparation: '',
};

const category = [
  'Beef',
  'Breakfast',
  'Chiken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
];

const ingredients = [
  { id: 1, ingr: 'Avocado' },
  { id: 2, ingr: 'Rice' },
  { id: 3, ingr: 'Cocumber' },
  { id: 4, ingr: 'Chicken' },
  { id: 5, ingr: 'Cherry' },
  { id: 6, ingr: 'Cheese' },
  { id: 7, ingr: 'Salad' },
  { id: 8, ingr: 'Pordge' },
  { id: 9, ingr: 'Pork' },
  { id: 10, ingr: 'Water' },
];

const mesure = ['tbs', 'tsp', 'kg', 'g'];

export const AddRecipeForm = props => {
  const optionsCategory = category.map(item => ({
    value: item.toLowerCase(),
    label: item,
  }));
  const optionsTimes = createArrTimesPrepare(5, 120, 5).map(num => ({
    value: `${num} min`,
    label: `${num} min`,
  }));
  const optionsIngredients = ingredients.map(item => ({
    value: item.id,
    label: item.ingr,
  }));
  const optionMesure = mesure.map(item => ({
    value: item,
    label: item,
  }));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}
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
          <RecipePreapationFields />
          <button type="submit">add</button>
        </RecipeForm>
      )}
    </Formik>
  );
};

AddRecipeForm.propTypes = {};
