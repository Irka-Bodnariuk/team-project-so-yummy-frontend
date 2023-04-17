import styled from 'styled-components';

import MobileBackgroundSecond1x from '../../../images/mobile/mainpage1x_mob_second.png';
import TabletBackgroundSecond1x from '../../../images/tablet/mainpage1x_tab_second.png';
import DesktopBackgroundSecond1x from '../../../images/desktop/mainpage1x_des_second.png';
import MobileBackgroundSecond2x from '../../../images/mobile/mainpage2x_mob_second.png';
import TabletBackgroundSecond2x from '../../../images/tablet/mainpage2x_tab_second.png';
import DesktopBackgroundSecond2x from '../../../images/desktop/mainpage2x_des_second.png';

export const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: 114px;
  padding-bottom: 100px;
  min-width: 375px;
  background: url(${MobileBackgroundSecond1x}) ${p => p.theme.colors.background};
  background-repeat: no-repeat;
  background-position-y: 109%;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${MobileBackgroundSecond2x})
      ${p => p.theme.colors.background};
    background-repeat: no-repeat;
    background-position-y: 110%;
    background-size: 85%;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-top: 136px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: 200px;
    background: url(${TabletBackgroundSecond1x})
      ${p => p.theme.colors.background};
    background-repeat: no-repeat;
    background-position-y: 117%;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${TabletBackgroundSecond2x})
        ${p => p.theme.colors.background};
      background-repeat: no-repeat;
      background-position-y: 117%;
      background-size: 65%;
    }
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    max-width: 1600px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 164px;
    background: url(${DesktopBackgroundSecond1x})
      ${p => p.theme.colors.background};
    background-repeat: no-repeat;
    background-position-y: 121%;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${DesktopBackgroundSecond2x})
        ${p => p.theme.colors.background};
      background-repeat: no-repeat;
      background-position-y: 123%;
      background-size: 50%;
    }
  }
`;
