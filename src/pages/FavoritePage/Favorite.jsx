import FavoriteList from 'components/FavoriteList/FavoriteList';
import MainTitle from 'components/MainTitle/MainTitle';
import BGDots from 'reusableComponents/BGDots/BGDots';
import { Page } from './Favorite.styled';

export const Favorite = () => (
  <Page>
    <BGDots />
    <MainTitle text="Favorite" />
    <FavoriteList />
  </Page>
);
