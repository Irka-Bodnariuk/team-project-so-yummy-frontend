import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  margin-left: ${p => p.theme.space[1] * 7}px;
  
  &:first-child {
    margin-left: ${p => p.theme.space[0]}px;
  }
`;