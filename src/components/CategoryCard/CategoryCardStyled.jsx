import styled from 'styled-components';

const CategoryCardStyled = styled.div`
  margin-bottom: 32px;

  & > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: #001833;
    margin-bottom: 32px;
  }

  & > div {
    background: url(${props => props.imgUrl});
    background-size: cover;
    width: 343px;
    height: 323px;
    border-radius: 8px;
    margin-bottom: 24px;
    padding-top: 245px;

    & > span {
      display: block;

      margin-left: 18px;
      margin-right: 18px;
      padding: 16px;

      background-color: #fff;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.24px;
      color: #3e4462;
      border-radius: 8px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  & > button {
    display: block;
    padding: 10px 24px;
    background: #8aa936;
    border-radius: 6px;
    margin-left: auto;
    border: none;
    & > span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #fafafa;
    }
  }
`;

export default CategoryCardStyled;
