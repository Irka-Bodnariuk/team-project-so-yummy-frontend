import styled from 'styled-components';

export const Search = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.label`
  margin-right: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.sectionTitle};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
