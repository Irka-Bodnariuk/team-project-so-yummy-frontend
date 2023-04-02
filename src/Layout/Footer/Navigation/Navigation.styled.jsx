import styled from "styled-components";

export const Text = styled.span`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: ${p => p.theme.space[5]}px;
font-weight: ${p => p.theme.fontWeights.bold};
line-height: 18px;
letter-spacing: 0.015em;
color: ${p => p.theme.colors.button.mainTextColor};
`;

export const Logo = styled.a`
  margin-right: ${p => p.theme.space[3]}px;
`;
