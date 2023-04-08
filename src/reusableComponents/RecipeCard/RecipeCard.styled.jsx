import styled from 'styled-components';
import { ReactComponent as FavoriteIco } from './fav.svg';
import { ReactComponent as LikeIco } from './like.svg';

export const CardContainer = styled.div`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.01);
    box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.32);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const BtnLike = styled.button`
  position: absolute;
  border: 0;
  background: transparent;

  top: 70px;
  left: 20px;
`;

export const BtnFav = styled.button`
  position: absolute;
  border: 0;
  background: transparent;

  top: 20px;
  left: 20px;
`;

export const Like = styled(LikeIco)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 1440px) {
    :hover :first-child {
      fill: #8aa936;
    }
  }
`;

export const Favorite = styled(FavoriteIco)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 1440px) {
    :hover :first-child {
      fill: #8aa936;
    }
  }
`;

export const TextContainer = styled.button`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);

  height: auto;

  padding: 16px;
  background-color: #ffffff;
  width: 307px;
  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3e4462;
  margin: 0;
`;

export const Popularity = styled.p`
  position: absolute;
  top: 110px;
  left: 40px;
  transform: translateX(-50%);
  color: #ffffff;
`;
