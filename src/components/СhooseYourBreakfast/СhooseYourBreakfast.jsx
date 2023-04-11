import arrow from '../../components/СhooseYourBreakfast/icon.svg';
import СhooseYourBreakfastStyled from './СhooseYourBreakfastStyled';
import { Link } from 'react-router-dom';

const СhooseYourBreakfast = () => {
  // categories/:categoryName

  return (
    <СhooseYourBreakfastStyled>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <Link to="/categories/breakfast">
        <span>See recipes</span>
        <img src={arrow} alt="" />
      </Link>
    </СhooseYourBreakfastStyled>
  );
};

export default СhooseYourBreakfast;
