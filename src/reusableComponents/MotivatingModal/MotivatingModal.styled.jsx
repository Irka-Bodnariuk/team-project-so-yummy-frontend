import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 90;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;

  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0314074);
  animation: fadeIn 0.25s ease-out;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -200px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 500px;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -250px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 110;
`;

export const Blur = styled.img`
  position: absolute;
  bottom: 18px;
  right: 50px;
  width: 200px;
  height: 180px;
  z-index: 120;

  @media screen and (min-width: 768px) {
    bottom: 24px;
    right: 66px;
    width: 268px;
    height: 242px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 40px;
    right: 116px;
    width: 268px;
    height: 242px;
  }
`;

export const Text = styled.p`
  position: absolute;
  width: 164px;
  height: 96px;
  right: 68px;
  top: 120px;
  text-align: left;
  z-index: 130;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    top: 140px;
    right: 90px;
    width: 220px;
    height: 120px;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    top: 225px;
    right: 140px;
    width: 220px;
    height: 120px;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.07;
  }
`;

export const TextSpan = styled.span`
  color: #8baa36;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 130px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8baa36;
  color: #ffffff;
  font-size: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 140;

  @media screen and (min-width: 768px) {
    bottom: 38px;
    right: 176px;
    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 54px;
    right: 226px;
    width: 48px;
    height: 48px;
  }
`;

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(-100px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
