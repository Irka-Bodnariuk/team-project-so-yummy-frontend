import styled from "styled-components";

export const Conteiner = styled.div`
  margin: 0 auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2] * 7}px;
  padding-bottom: ${p => p.theme.space[1] * 9}px;
  min-width: 375px;
  background-color: ${p => p.theme.colors.heroText};
`;
