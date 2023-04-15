import styled from 'styled-components';

export const Section = styled.div`
  padding: 32px 0 50px 0;
`;

export const TableData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 12px 14px;
  background-color: ${p => p.theme.colors.accentColor};
  border-radius: 8px;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: #fafafa;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 10px;
  background-color: ${p => p.theme.colors.pageRecipeItemIngBg};
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const IngredientTitle = styled.p`
  margin-left: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: -0.24px;
  white-space: pre-wrap;
  color: ${p => p.theme.colors.primaryText};
`;

export const MeasureInfo = styled.div`
  margin-right: 50px;
  padding: 4px 8px;
  min-width: 62px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: ${p => p.theme.colors.secondaryTextColor};
  background-color: ${p => p.theme.colors.accentColor};
  border-radius: 8px;
`;
