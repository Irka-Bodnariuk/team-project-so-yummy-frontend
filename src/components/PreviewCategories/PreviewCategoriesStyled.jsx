import styled from 'styled-components';

import MobileBackgroundSecond1x from '../../images/mobile/mainpage1x_mob_second.png';
import TabletBackgroundSecond1x from '../../images/tablet/mainpage1x_tab_second.png';
import DesktopBackgroundSecond1x from '../../images/desktop/mainpage1x_des_second.png';

const PreviewCategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${MobileBackgroundSecond1x});
  background-repeat: no-repeat;
  background-position-y: 114%;

  @media ${props => props.theme.device.tablet} {
    background: url(${TabletBackgroundSecond1x});
    background-repeat: no-repeat;
    padding-bottom: 5px;
    background-position-y: 125%;
  }

  @media ${props => props.theme.device.desktop} {
    background: url(${DesktopBackgroundSecond1x});
    background-repeat: no-repeat;
    padding-bottom: 23px;
    background-position-y: 135%;
  }

  & > span {
    filter: drop-shadow(1px 0px 0px #8baa36) drop-shadow(-1px 0px 0px #8baa36)
      drop-shadow(0px 1px 0px #8baa36) drop-shadow(0px -1px 0px #8baa36)
      drop-shadow(1px 0px 0px #8baa36) drop-shadow(-1px 0px 0px #8baa36)
      drop-shadow(0px 1px 0px #8baa36) drop-shadow(0px -1px 0px #8baa36);
    margin-bottom: 93px;
    & > button {
      clip-path: path(
        'M1 15.3333C1 7.41725 7.41725 1 15.3333 1H164.333C180.718 1 194 14.2822 194 30.6667C194 38.5828 187.583 45 179.667 45H30.6667C14.2822 45 1 31.7178 1 15.3333Z'
      );
      display: inline-block;
      border: none;
      background: #fff;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #22252a;
      width: 195px;
      height: 52px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 7px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #22252a;

      @media ${props => props.theme.device.tablet} {
        font-size: 16px;
        line-height: 24px;
        clip-path: path(
          'M1 20.3333C1 9.65583 9.65583 1 20.3333 1H198.333C220.241 1 238 18.7594 238 40.6667C238 51.3442 229.344 60 218.667 60H40.6667C18.7594 60 1 42.2406 1 20.3333Z'
        );
        width: 239px;
        height: 61px;
      }
    }
  }
`;

export default PreviewCategoriesStyled;
