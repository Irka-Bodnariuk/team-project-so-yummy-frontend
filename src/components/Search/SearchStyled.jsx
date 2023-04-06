import styled from 'styled-components';

const SearchStyled = styled.div`
  position: relative;
  clip-path: path(
    'M17.3333 0.5H260.333C279.203 0.5 294.5 15.7969 294.5 34.6667C294.5 43.9635 286.963 51.5 277.667 51.5H34.6667C15.7969 51.5 0.5 36.2031 0.5 17.3333C0.5 8.03654 8.03654 0.5 17.3333 0.5Z'
  );
  background-color: #fff;
  border: none;
  height: 52px;
  width: 295px;
  margin-right: 3px;
  margin-bottom: 83px;

  & > button {
    clip-path: path(
      'M0 17.3333C0 7.7604 7.7604 0 17.3333 0H78.3333C97.4792 0 113 15.5208 113 34.6667V34.6667C113 44.2396 105.24 52 95.6667 52H34.6667C15.5208 52 0 36.4792 0 17.3333V17.3333Z'
    );
    background-color: black;
    border: none;
    position: absolute;
    left: 183px;
    top: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fafafa;
    width: 113px;
    height: 52px;
  }

  & > input {
    position: absolute;
    background: rgba(0, 0, 0, 0);
    padding: 0;
    width: 295px;
    border: 0;
    outline: none;
    border-radius: 0;
    top: 17px;
    left: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #bdbdbd;
  }
`;

export default SearchStyled;
