import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #FAFAFA;
`;

export const Item = styled.li`
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;