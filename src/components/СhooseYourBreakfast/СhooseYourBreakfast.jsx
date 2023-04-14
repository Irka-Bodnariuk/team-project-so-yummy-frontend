import arrow from '../../components/СhooseYourBreakfast/icon.svg';
import {
  SeeRecipeLink,
  СhooseYourBreakfastStyled,
} from './СhooseYourBreakfastStyled';

const СhooseYourBreakfast = () => {
  // categories/:categoryName

  return (
    <СhooseYourBreakfastStyled>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <SeeRecipeLink to="/categories/breakfast">
        <span>See recipes</span>
        <img src={arrow} alt="" />
      </SeeRecipeLink>
    </СhooseYourBreakfastStyled>
  );
};

export default СhooseYourBreakfast;
