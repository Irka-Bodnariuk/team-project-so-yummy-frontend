import styled from "styled-components";
import bg_small_mob_1x from "../../../../images/bg/bg_small_mob_1x.png"

export const WrapperCopytight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: 768px) {
   height: 78px;
  }

   @media screen and (min-width: 1440px) {
   height: 114px;
  }
`;

export const TextCopyright = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.heroText};
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