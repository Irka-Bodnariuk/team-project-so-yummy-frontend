import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
  }
`;

export const Item = styled.li`
  /* color: ${p => p.theme.colors.headerText}; */
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.subtitle};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1.6;

  color: ${p => p.theme.colors.headerText};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;
export const SearchIcon = styled(RiSearchLine)`
  width: 24px;
  height: 24px;

  color: ${p => p.theme.colors.heroText};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;
