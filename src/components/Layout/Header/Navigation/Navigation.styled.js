import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiSearch, HiMenuAlt2 } from 'react-icons/hi';
// // HiMenuAlt2;
// HiMenuAlt2;
export const Container = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Item = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #23262a;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: #23262a;
`;
export const SearchIcon = styled(HiSearch)`
  width: 24px;
  height: 24px;

  color: #000;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  width: 28px;
  height: 28px;

  color: #000;
`;
