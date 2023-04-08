import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const WrapPhoto = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 24px;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`;

export const Photo = styled.div`
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
