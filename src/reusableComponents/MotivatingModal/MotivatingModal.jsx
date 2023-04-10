import React, { useState } from 'react';
import {
  Backdrop,
  Wrapper,
  Content,
  Image,
  Blur,
  Text,
  TextSpan,
  CloseButton,
} from './MotivatingModal.styled';
import img_blur from './images/m_blur.png';
import img_first_shl from './images/m_first_shl.png';
import img_100days from './images/m_100days.png';
import img_10rec_tofav from './images/m_10rec_tofav.png';
import img_first_tofav from './images/m_first_tofav.png';

const MotivatingModal = ({ option }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const getContent = () => {
    switch (option) {
      case 1:
        return (
          <Content>
            <Image src={img_first_shl} alt="first" />
            <Blur src={img_blur} alt="blur" />

            <Text>
              <TextSpan>Wow!</TextSpan> You have created your first shopping
              list!
            </Text>
          </Content>
        );
      case 2:
        return (
          <Content>
            <Image src={img_100days} alt="100 days" />
            <Blur src={img_blur} alt="blur" />

            <Text>
              <TextSpan>Wow!</TextSpan> You have been using the application for
              <TextSpan> 100 </TextSpan>
              days!
            </Text>
          </Content>
        );
      case 3:
        return (
          <Content>
            <Image src={img_10rec_tofav} alt="10 rec" />
            <Blur src={img_blur} alt="blur" />

            <Text>
              <TextSpan>Wow!</TextSpan> You have added <TextSpan> 10 </TextSpan>{' '}
              recipes to your favorites!
            </Text>
          </Content>
        );
      case 4:
        return (
          <Content>
            <Image src={img_first_tofav} alt="first" />
            <Blur src={img_blur} alt="blur" />

            <Text>
              <TextSpan>Wow!</TextSpan> You have created your first recipe!
            </Text>
          </Content>
        );
      default:
        return null;
    }
  };

  return isVisible ? (
    <Backdrop onClick={handleOverlayClick}>
      <Wrapper>
        <CloseButton onClick={handleClose}>&#10005;</CloseButton>
        {getContent()}
      </Wrapper>
    </Backdrop>
  ) : null;
};

export default MotivatingModal;
