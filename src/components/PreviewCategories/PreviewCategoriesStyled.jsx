import styled from 'styled-components';

import MobileBackgroundSecond1x from '../../images/mobile/mainpage1x_mob_second.png';
import TabletBackgroundSecond1x from '../../images/tablet/mainpage1x_tab_second.png';
import DesktopBackgroundSecond1x from '../../images/desktop/mainpage1x_des_second.png';
import MobileBackgroundSecond2x from '../../images/mobile/mainpage2x_mob_second.png';
import TabletBackgroundSecond2x from '../../images/tablet/mainpage2x_tab_second.png';
import DesktopBackgroundSecond2x from '../../images/desktop/mainpage2x_des_second.png';

const PreviewCategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${MobileBackgroundSecond1x});
  background-repeat: no-repeat;
  background-position-y: 114%;

  margin-left: ${p => -p.theme.space[4]}px;
  margin-right: ${p => -p.theme.space[4]}px;

  margin-bottom: -100px;
  padding-bottom: 100px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${MobileBackgroundSecond2x});
    background-repeat: no-repeat;
    background-position-y: 115%;
    background-size: 85%;
  }

  @media ${props => props.theme.device.tablet} {
    background: url(${TabletBackgroundSecond1x});
    background-repeat: no-repeat;
    background-position-y: 125%;

    margin-left: ${p => -p.theme.space[5]}px;
    margin-right: ${p => -p.theme.space[5]}px;

    padding-bottom: 5px;
    padding-bottom: 100px;
    margin-bottom: -200px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${TabletBackgroundSecond2x});
      background-repeat: no-repeat;
      background-position-y: 125%;
      background-size: 65%;
    }
  }

  @media ${props => props.theme.device.desktop} {
    background: url(${DesktopBackgroundSecond1x});
    background-repeat: no-repeat;
    background-position-y: 135%;
    padding-bottom: 23px;

    margin-left: -100px;
    margin-right: -100px;
    padding-bottom: 115px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${DesktopBackgroundSecond2x});
      background-repeat: no-repeat;
      background-position-y: 137%;
      background-size: 50%;
    }
  }
`;

export default PreviewCategoriesStyled;
