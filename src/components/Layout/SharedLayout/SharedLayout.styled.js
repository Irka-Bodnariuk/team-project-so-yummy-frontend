import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 0 auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: 114px;
  padding-bottom: 100px;
  min-width: 375px;
  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-top: 136px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 164px;
  }
`;
