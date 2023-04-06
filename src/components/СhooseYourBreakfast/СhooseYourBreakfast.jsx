import arrow from '../../components/СhooseYourBreakfast/icon.svg';
import СhooseYourBreakfastStyled from './СhooseYourBreakfastStyled';

const СhooseYourBreakfast = () => {
  return (
    <СhooseYourBreakfastStyled>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <button>
        <span>See recipes</span>
        <img src={arrow} alt="" />
      </button>
    </СhooseYourBreakfastStyled>
  );
};

export default СhooseYourBreakfast;
