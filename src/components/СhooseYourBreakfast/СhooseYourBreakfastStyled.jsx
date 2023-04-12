import styled from 'styled-components';

// ${p => p.theme.colors.form.inputError}

const СhooseYourBreakfastStyled = styled.div`
  width: 225px;
  background: #fafafa;
  border-radius: 8px;
  padding: 8px;
  margin-left: 82px;
  margin-bottom: 115px;

  @media ${props => props.theme.device.tablet} {
    order: 3;
    width: 260px;
    padding: 12px;
    margin-top: -12px;
    margin-left: 78px;
  }

  @media ${props => props.theme.device.desktop} {
    margin-left: 407px;
    width: 298px;
    padding: 16px;
    margin-top: 19px;
    margin-right: 0px;
  }

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
    @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 14px;
      line-height: 20px;
    }
  }
  & > a {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-decoration: none;
    border: none;
    background: none;
    margin-left: auto;
    margin-right: auto;
    padding: 4px 0 4px 0;
    margin-bottom: -2px;

    @media ${props => props.theme.device.tablet} {
      margin-right: 3px;
    }

    @media ${props => props.theme.device.desktop} {
      margin-right: 1px;
    }

    & > img {
      /* display: inline-block; */
      width: 16px;
      height: 10px;
      margin-left: 5px;
    }
    & > span {
      /* display: inline-block; */

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
