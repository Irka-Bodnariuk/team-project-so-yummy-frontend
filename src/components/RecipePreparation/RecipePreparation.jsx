// import { useState } from 'react';
// import PropTypes from 'prop-types';
import placeholder from 'images/recipepage/placeholder-meal.png';
import { Box } from 'components/Box';
import {
  Title,
  Instruction,
  BoxImg,
  Images,
  InstructionList,
  Item,
  IconNum,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ recipe }) => {
  const images = recipe.previewImg ?? recipe.preview ?? placeholder;
  const instructions = recipe.instructions
    .split('.')
    .filter(item => Number.isNaN(Number(parseInt(item))))
    .filter(str => str.trim() !== '');

  return (
    <Box>
      <Title>Recipe Preparation</Title>
      <InstructionList>
        {instructions.map((item, idx) => (
          <Item key={idx}>
            <IconNum>{idx + 1}</IconNum>
            <Instruction>{item.trim()}</Instruction>
          </Item>
        ))}
      </InstructionList>
      <BoxImg>
        <Images src={images} alt={recipe.title} />
      </BoxImg>
    </Box>
  );
};

RecipePreparation.propTypes = {};
