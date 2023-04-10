import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 24px;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;

export const WrapPhoto = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  padding: 6px 0;
  margin: 0;
`;

export const Photo = styled.img`
  width: 34px;
  height: 34px;
  background-color: grey;
  border-radius: 50px;
  margin-right: 14px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const Name = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: ${p => p.theme.fontSizes.xs}px;
  line-height: 170%;

  color: ${p => p.theme.colors.heroText};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s}px;
  }
`;
