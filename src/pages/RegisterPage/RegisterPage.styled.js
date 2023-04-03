import styled from "styled-components";
// import regImage from '../../images/mobile/AuthPanaMob-min.png';
// import regImageRetina from '../../images/mobile/AuthPanaMobRet-min.png';
import regBg from "../../images/mobile/form-auth-mob-min.png";

export const RegisterMain = styled.main`
  height: 100vh;
  padding-top: 87px;
`;

export const RegisterImage = styled.img`
  width: 285px;
  height: 250px;
  margin: 0 auto;
`;

// export const RegisterImage = styled.div`
//   width: 285px;
//   height: 250px;
//   margin: 0 auto;

//   background-image: url(${regImage});

//   @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${regImageRetina});
//     background-size: cover;
//   }
// `;

export const RegisterBg = styled.div`
  width: 100%;
  height: 375px;

  background-image: url(${regBg});
  background-repeat: no-repeat;
  background-size: cover;
`;
