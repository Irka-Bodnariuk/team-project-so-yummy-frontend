import React from 'react';
import sprite from '../../images/sprite.svg';

export const AddSvg = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);
