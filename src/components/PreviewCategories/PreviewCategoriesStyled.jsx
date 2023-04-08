import styled from 'styled-components';

const PreviewCategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    filter: drop-shadow(1px 0px 0px #8baa36) drop-shadow(-1px 0px 0px #8baa36)
      drop-shadow(0px 1px 0px #8baa36) drop-shadow(0px -1px 0px #8baa36)
      drop-shadow(1px 0px 0px #8baa36) drop-shadow(-1px 0px 0px #8baa36)
      drop-shadow(0px 1px 0px #8baa36) drop-shadow(0px -1px 0px #8baa36);
    & > button {
      clip-path: path(
        'M1 15.3333C1 7.41725 7.41725 1 15.3333 1H164.333C180.718 1 194 14.2822 194 30.6667C194 38.5828 187.583 45 179.667 45H30.6667C14.2822 45 1 31.7178 1 15.3333Z'
      );
      display: inline-block;
      border: none;
      background: #fff;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #22252a;
      width: 195px;
      height: 52px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 7px;
    }
  }
`;

export default PreviewCategoriesStyled;
