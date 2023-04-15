import styled from "styled-components";
// import bg_small_mob_1x from "../../../../images/bg/bg_small_mob_1x.png"

import FooterMobileBackground1x from '../../../../images/mobile/footer-background-mob1x.png';
import FooterMobileBackground2x from '../../../../images/mobile/footer-background-mob2x.png';
import FooterTabletBackground1x from '../../../../images/tablet/footer-background-tab1x.png';
import FooterTabletBackground2x from '../../../../images/tablet/footer-background-tab2x.png';
import FooterDesktopBackground1x from '../../../../images/desktop/footer-background-des1x.png';
import FooterDesktopBackground2x from '../../../../images/desktop/footer-background-des2x.png';

export const WrapperCopytight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: ${(p) => p.theme.colors.background};

  background: url(${FooterMobileBackground1x});
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-position-x: 100%;
  
   @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
       background: url(${FooterMobileBackground2x});
       background-repeat: no-repeat;
       background-position-y: 100%;
       background-position-x: 100%;
       background-size: 50%;
    }

  @media screen and (min-width: 768px) {
    height: 78px;
    background: url(${FooterTabletBackground1x});
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-position-x: 100%;

   @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background: url(${FooterTabletBackground2x});
        background-repeat: no-repeat;
        background-position-y: 100%;
        background-position-x: 100%;
        background-size: 45%;
      }
  }

   @media screen and (min-width: 1440px) {
   height: 114px;
   background: url(${FooterDesktopBackground1x});
   background-repeat: no-repeat;
   background-position-y: 100%;
   background-position-x: 100%;

  @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background: url(${FooterDesktopBackground2x});
        background-size: 37%;
        background-repeat: no-repeat;
        background-position-y: 100%;
        background-position-x: 100%;
      }

  }
`;

export const TextCopyright = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.heroText};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
   font-size: 14px;
   line-height: 14px;
  }
`;

export const Text = styled.span`
  margin-left: 14px;

  @media screen and (min-width: 768px) {
   margin-left: 28px;
  }

  @media screen and (min-width: 1440px) {
   margin-left: 40px;
  }

`;

// export const Background = styled.div`
//   position: absolute;
//   right: -22px;
//   bottom: -10px;
//   width: 200px;
//   height: 100px;
//   background-image: url(${bg_small_mob_1x});
//   background-repeat: no-repeat;
//   background-size: 200px 100px;
//   z-index: 100;
// `;
