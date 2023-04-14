import styled from 'styled-components';

export const SharedContainer = styled.div`
  margin-top: 72px;

  @media ${props => props.theme.device.desktop} {
    margin-top: 100px;
    display: flex;
    gap: 120px;
  }
`;

export const ContainerForm = styled.div`
  margin-bottom: 72px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 100px;
  }
  @media ${props => props.theme.device.desktop} {
    flex-grow: 1;
  }
`;

export const ContainerPopular = styled.div`
  @media ${props => props.theme.device.desktop} {
    width: 320px;
  }
`;

export const SocialsTitle = styled.b`
  display: block;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.primaryText};
`;
