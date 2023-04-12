import styled from 'styled-components';
import { HiMenuAlt2 } from 'react-icons/hi';
export const ContainerHeader = styled.div`
  position: relative;
  /* transform: translatex(50%); */
  /* min-width: 375px; */
  display: flex;
  justify-content: center;
  min-width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    /* min-width: 768px; */
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Container = styled.header`
  /* position: relative; */
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  /* transform: translatex(-50%); */

  display: flex;

  align-items: center;
  margin: 0 auto;
  min-width: 375px;
  /* background-color: ${p => p.theme.colors.background}; */

  padding-top: ${p => p.theme.space[4] + 2}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[0]}px;

  @media screen and (min-width: 768px) {
    /* min-width: 768px; */
    max-width: 768px;

    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;

    padding-left: ${p => p.theme.space[2] * 25}px;
    padding-right: ${p => p.theme.space[2] * 25}px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  width: 28px;
  height: 28px;
  color: ${p => (p.pathname === '/my' ? '#23262A' : p.theme.colors.headerText)};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
    color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    color: ${p =>
      p.pathname === '/main' || p.pathname === '/my'
        ? '#23262A'
        : p.theme.colors.headerText};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
