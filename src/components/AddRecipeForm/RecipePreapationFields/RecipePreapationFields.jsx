// import PropTypes from 'prop-types';
import { Legend } from '../Legend/Legend.styled';
import { FieldsetPreparation } from './RecipePreapationFields.styled';

export const RecipePreapationFields = props => {
  return (
    <FieldsetPreparation>
      <Legend>Recipe Preparation</Legend>
    </FieldsetPreparation>
  );
};

RecipePreapationFields.propTypes = {};
