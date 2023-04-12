import styled from 'styled-components';

export const Legend = styled.legend`
  margin-bottom: 24px;
  font-weight: ${p => p.theme.fontWeights.title};
  font-size: ${p => `${p.theme.fontSizes.xl}px`};
  line-height: 1;
  letter-spacing: -0.02em;
`;
