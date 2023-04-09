import MobileBackground1x from '../../images/mobile/mainpage1x_mob.png';
import TabletBackground1x from '../../images/tablet/mainpage1x_tab.png';
import DesktopBackground1x from '../../images/desktop/mainpage1x_desk.png';

import styled from 'styled-components';

const MainPageStyled = styled.div`
  background: url(${MobileBackground1x});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: none;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;

  @media ${props => props.theme.device.tablet} {
    background: url(${TabletBackground1x});
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position-y: 0%;
    align-items: flex-start;
    padding-bottom: 125px;
    margin-bottom: 0px;
    margin-top: -68px;

    & > div:first-of-type {
      display: flex;
      flex-direction: row;
    }
  }

  @media ${props => props.theme.device.desktop} {
    background: url(${DesktopBackground1x});
    padding-bottom: 210px;
    background-position-y: 0%;
    margin-top: -70px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-bottom: 100px;
    margin-bottom: 110px;
  }

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
    padding-top: 70px;
    & span {
      color: #8baa36;
    }
    @media ${props => props.theme.device.tablet} {
      padding-top: 205px;
      font-size: 72px;
      line-height: 72px;
      margin-left: 33px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 100px;
      line-height: 100px;
      padding-bottom: 0px;
      padding-top: 230px;
      margin-left: 100px;
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
    @media ${props => props.theme.device.tablet} {
      width: 362px;
      text-align: left;
      margin-top: 10px;
      margin-left: 38px;
      margin-bottom: 30px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
      line-height: 24px;
      padding-top: 160px;
      margin-left: 100px;
      width: 465px;
      margin-top: 0px;
      padding-top: 0px;
      margin-left: 107px;
    }
  }
`;

export default MainPageStyled;
