import styled from 'styled-components';

export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.background};
`;

export const MainText = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.xxxl}px;
`;
