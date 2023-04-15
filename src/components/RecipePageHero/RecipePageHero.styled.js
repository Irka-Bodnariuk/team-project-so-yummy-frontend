import bgMobile1x from '../../images/recipepage/bg_mobile_1x.webp';
import bgMobile2x from '../../images/recipepage/bg_mobile_2x.webp';
import styled from 'styled-components';

export const Hero = styled.section`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  padding: 144px 36px 90px 36px;
  height: 455px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgMobile1x});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
  color: #22252a;
`;

export const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: #23262a;

  svg {
    flex-grow: 1;
    width: 14px;
    height: 14px;
  }
`;
