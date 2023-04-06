import React from 'react';
import styled from 'styled-components';
import MainBackground from '../../images/mobile/mainpage1x_mob.png';
import СhooseYourBreakfast from '../../components/СhooseYourBreakfast/СhooseYourBreakfast';
import Search from 'components/Search/Search';

const MainPageStyled = styled.div`
  background: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.005em;
    color: #22252a;
    padding-top: 132px;
    margin-bottom: 14px;
    & span {
      color: #8baa36;
    }
  }

  & > p {
    display: block;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #23262a;
    width: 248px;
    margin-bottom: 157px;
  }
`;

export const MainPage = () => {
  return (
    <MainPageStyled>
      <h1>
        <span>So</span>Yummy
      </h1>
      <p>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
      <СhooseYourBreakfast />
      <Search />
    </MainPageStyled>
  );
};
