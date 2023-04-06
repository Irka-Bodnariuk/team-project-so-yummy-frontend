import styled from 'styled-components';

const СhooseYourBreakfastStyled = styled.div`
  width: 225px;
  background: #fafafa;
  border-radius: 8px;
  padding: 8px;
  margin-left: 82px;
  margin-bottom: 115px;
  & > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.24px;
    color: #3e4462;
    margin-bottom: 4px;
    display: block;
    & span {
      color: #8baa36;
    }
  }
  & > button {
    border: none;
    background: none;
    margin-left: auto;
    display: flex;
    /* align-items: center; */
    padding: 4px 0 4px 0;
    margin-bottom: -2px;

    & > img {
      display: block;
      width: 16px;
      height: 10px;
      margin-left: 5px;
    }
    & > span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.2px;
      color: #3e4462;
    }
  }
`;

export default СhooseYourBreakfastStyled;
