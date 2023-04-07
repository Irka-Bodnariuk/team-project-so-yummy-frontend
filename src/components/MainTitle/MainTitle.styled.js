import styled from 'styled-components';

export const Title = styled.h2`
  color: ${p => p.theme.colors.sectionTitle};
  font-weight: 600;
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.sectXl}px;
  }
`;

// export const Green1 = styled.div`
//   position: absolute;
//   width: 8px;
//   height: 8px;
//   left: 104px;
//   top: 14px;
//   background: #8baa36;
//   border-radius: 3px;
//   transform: rotate(-25deg);

//   @media ${props => props.theme.device.tablet} {
//     width: 14px;
//     height: 14px;
//     left: 187px;
//     top: 23px;
//   }

//   @media ${props => props.theme.device.desktop} {
//     left: 228px;
//     top: 54px;
//   }
// `

// export const Green2 = styled.div`
//   position: absolute;
//   width: 8px;
//   height: 8px;
//   left: 333px;
//   top: 46px;
//   background: #8baa36;
//   border-radius: 3px;
//   transform: rotate(-25deg);

//   @media ${props => props.theme.device.tablet} {
//     width: 14px;
//     height: 14px;
//     left: 674px;
//     top: 36px;
//   }

//   @media ${props => props.theme.device.desktop} {
//     left: 1150px;
//     top: 67px;
//   }
// `
// export const Black1 = styled.div`
//   position: absolute;
//   width: 6px;
//   height: 6px;
//   left: 231px;
//   top: 79px;
//   background: #22252a;
//   border-radius: 3px;
//   transform: rotate(-25deg);

//   @media ${props => props.theme.device.tablet} {
//     width: 12px;
//     height: 12px;
//     left: 405px;
//     top: 93px;
//   }

//   @media ${props => props.theme.device.desktop} {
//     left: 707px;
//     top: 137px;
//   }
// `;
