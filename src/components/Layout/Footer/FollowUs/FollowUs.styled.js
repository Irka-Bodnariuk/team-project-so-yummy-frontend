import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: ${p =>
    p.place === 'recipe-page' ? 'flex-start' : 'center'};
  align-items: center;
  gap: 9px;

  @media ${props => props.theme.device.tablet} {
    gap: 13px;
  }
`;

export const Item = styled.li``;

export const Link = styled.a`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${p => p.theme.colors.footerSocialIcons};
    fill: ${p => p.theme.colors.footerSocialIcons};
  }
`;
