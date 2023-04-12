import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  patchRecipeFavoriteById,
  patchRecipeLikeById,
} from 'store/search/searchOperations';
import {
  CardContainer,
  Image,
  BtnLike,
  BtnFav,
  Like,
  Favorite,
  TextContainer,
  Popularity,
} from './RecipeCard.styled';

import { toast } from 'react-toastify';
import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';

const RecipeCard = ({
  image,
  altText,
  text,
  favorite,
  like,
  toogle,
  isShow,
  id,
  allData = [],
  setAllData = () => {},
  popularity,
}) => {
  const maxTextLength = 26;
  const [isLike, setIsLike] = useState(like);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const [isLoadFavorite, setIsLoadFavorite] = useState(false);
  const [isLoadLike, setIsLoadLike] = useState(false);
  const [motivation, setMotivation] = useState('');
  const [popular, setPopular] = useState(popularity);

  const addToFavorite = () => {
    setIsLoadFavorite(true);

    patchRecipeFavoriteById(id)
      .then(({ favorite, popularity, motivation }) => {
        setIsLoadFavorite(false);
        const changeData = allData.map(item => {
          if (item._id === id) {
            return { ...item, favorite };
          }
          return item;
        });
        setAllData(changeData);
        setPopular(popularity);
        setIsFavorite(favorite);
        setMotivation(motivation);
        favorite && toast.success(`Added to Favorite!`);
        !favorite && toast.info(`Removed from Favorite!`);
      })
      .catch(() => setIsLoadFavorite(false));
  };

  const addLike = () => {
    setIsLoadLike(true);
    patchRecipeLikeById(id)
      .then(({ like, popularity }) => {
        setIsLoadLike(false);

        const changeData = allData.map(item => {
          if (item._id === id) {
            return { ...item, like };
          }
          return item;
        });
        setAllData(changeData);
        setPopular(popularity);

        setIsLike(like);
      })
      .catch(() => setIsLoadLike(false));
  };

  const favFeel = favorite || isFavorite ? 'none' : 'none';
  const likeFeel = like || isLike ? 'none' : 'none';
  const shortText =
    text.length < maxTextLength
      ? text
      : text.substr(0, maxTextLength).replace(/\s+\S*$/, '') + '...';

  return (
    <>
      {motivation === '10' && <MotivatingModal option={3} />}
      <CardContainer>
        <Link to={`/recipe/${id}`}>
          <Image src={image} alt={altText} />
        </Link>
        <TextContainer
          onMouseOver={text.length < maxTextLength ? null : toogle}
          onClick={text.length < maxTextLength ? null : toogle}
        >
          {isShow ? text : shortText}
        </TextContainer>
        <BtnFav
          type="button"
          onClick={() => {
            if (isLoadFavorite) return;
            addToFavorite();
          }}
        >
          <Favorite fill={favFeel} />
        </BtnFav>
        <BtnLike
          type="button"
          onClick={() => {
            if (isLoadLike) return;
            addLike();
          }}
        >
          <Like fill={likeFeel} />
        </BtnLike>
        <Popularity>{popular}</Popularity>
      </CardContainer>
    </>
  );
};

export default RecipeCard;
