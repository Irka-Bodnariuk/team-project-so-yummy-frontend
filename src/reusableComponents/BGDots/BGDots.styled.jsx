import styled from 'styled-components';

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  width: 345px;
  height: 192px;
  background-image: url('../../images/sq_green_8.png');
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: left 105px top 14px, left 231px top 79px,
    left 332px top 46px;

  @media screen and (min-width: 768px) {
    width: 718px;
    height: 240px;
    background-image: url('../../images/sq_green_14.png');
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 189px top 17px, left 407px top 87px,
      left 695px top 31px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    height: 240px;
    background-image: url('../../images/sq_green_14.png');
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 228px top 56px, left 706px top 139px,
      left 1149px top 69px;
  }
`;
