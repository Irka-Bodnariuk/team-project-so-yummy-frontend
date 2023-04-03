import styled from 'styled-components';
import regBg from '../../images/mobile/FormAuthMob-min.png';

export const RegisterMain = styled.main`
  position: relative;

  height: 100vh;
  padding-top: 87px;
`;

export const RegisterImage = styled.img`
  width: 285px;
  height: 250px;
  margin: 0 auto;
`;

export const RegisterBg = styled.div`
  width: 100%;
  height: 490px;

  background-image: url(${regBg});
  background-repeat: no-repeat;
  background-size: cover;
`;
