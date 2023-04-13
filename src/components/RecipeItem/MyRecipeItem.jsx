import { ButtonDel } from './ButtonDelete';
import { Button } from '../Button/Button';

import {
  CardItem,
  ImgBox,
  Image,
  Info,
  Title,
  Description,
  Time,
  ButtonDelete,
  ButtonWrapper,
} from './MyRecipeItem.styled';

const MyRecipeItem = ({
  description,
  preview,
  time,
  title,
  id,
  handleDelete,
  styleDel,
}) => {
  return (
    <CardItem>
      <ImgBox>
        <Image src={preview} alt={title} />
      </ImgBox>
      <Info>
        <div>
          <Title>{title}</Title>
          <ButtonDelete onClick={() => handleDelete(id)}>
            <ButtonDel />
          </ButtonDelete>
          <Description>{description}</Description>
        </div>
        <div>
          <ButtonWrapper>
            <Time>{time} min</Time>
            <Button
              to="/my"
              look="rounded"
              width="87px"
              heigth="27px"
              widthTablet="138px"
              heigthTablet="45px"
              heigthDesktop="54px"
              widthDesktop="160px"
              fontSize="10px"
              fontSizeTablet="14px"
              fontSizeDesktop="16px"
              lineHeight="15px"
              lineHeightTablet="21px"
              lineHeightDesktop="24px"
            >
              See recipe
            </Button>
          </ButtonWrapper>
        </div>
      </Info>
    </CardItem>
  );
};

export default MyRecipeItem;
