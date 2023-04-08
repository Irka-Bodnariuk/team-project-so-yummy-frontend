import MainBackground from '../../images/mobile/mainpage1x_mob.png';
import styled from 'styled-components';

const MainPageStyled = styled.div`
  background: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: none;
  background-position-y: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 66px;

  & > h1 {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #22252a;
    margin-bottom: 14px;
    padding-top: 67px;
    & span {
      color: #8baa36;
    }
  }

  & > p {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #23262a;
    width: 248px;
    margin-bottom: 157px;
  }
`;

export default MainPageStyled;
