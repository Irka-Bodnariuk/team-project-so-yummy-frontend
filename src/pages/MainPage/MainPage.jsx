import СhooseYourBreakfast from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import Search from 'components/Search/Search';
import MainPageStyled from './MainPageStyled';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

export const MainPage = () => {
  return (
    <>
      <MainPageStyled>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <div>
          <СhooseYourBreakfast />
          <Search />
        </div>
      </MainPageStyled>
      <PreviewCategories />
    </>
  );
};
