import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import MainPageStyled from './MainPageStyled';
import СhooseYourBreakfast from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import MainPageSearch from 'components/MainPageSearch/MainPageSearch';

import { Button } from 'components/Button/Button';

const MainPage = () => {
  return (
    <>
      <MainPageStyled>
        <Button
          look="rounded"
          to="/register"
          fontSize="14px"
          fontSizeTablet="16px"
          width="113px"
          heigth="52px"
          widthTablet="184px"
          heigthTablet="67px"
        >
          Search
        </Button>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <div>
          <СhooseYourBreakfast />
          <MainPageSearch />
        </div>
      </MainPageStyled>
      <PreviewCategories />
    </>
  );
};

export { MainPage };
