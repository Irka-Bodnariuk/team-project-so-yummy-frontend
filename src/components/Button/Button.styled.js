import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ look, size }) => {
    if (size) {
      return size;
    }

    switch (look) {
      case 'subscribe':
        return '21px 138px';
      case 'subscribe_dark':
        return '21px 138px';
      case 'rounded':
        return '50px 42px';
      case 'rounded_dark':
        return '50px 42px';
      case 'logout':
        return '21px 39px';
      case 'cancel':
        return '21px 39px';
      default:
        return '#22252a';
    }
  }};

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.body};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: 21px;

  color: ${({ look }) => (look === 'cancel' ? '#23262A' : '#fafafa')};
  clip-path: ${({ look }) =>
    look === 'rounded' || look === 'rounded_dark'
      ? 'inset(25% 0 25% 0 round 15% 35% 15% 30%)'
      : 'none'};
  background-color: ${({ look, theme }) => {
    switch (look) {
      case 'subscribe':
        return '#8baa36';
      case 'subscribe_dark':
        return '#1E1F28';
      case 'rounded':
        return '#22252a';
      case 'rounded_dark':
        return '#8baa36';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: ${({ look }) =>
    look === 'rounded' ? 'none' : '1px solid transparent'};
  border-radius: 6px;

  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  @media screen and (min-width: 768px) {
    font-size: ${({ fontSizeTablet }) =>
      fontSizeTablet ? fontSizeTablet : '16px'};
    padding: ${({ look, sizeTablet }) => {
      if (sizeTablet) {
        return sizeTablet;
      }

      switch (look) {
        case 'subscribe':
          return '21px 138px';
        case 'subscribe_dark':
          return '21px 138px';
        case 'rounded':
          return '50px 42px';
        case 'rounded_dark':
          return '50px 42px';
        case 'logout':
          return '21px 39px';
        case 'cancel':
          return '21px 39px';
        default:
          return '#22252a';
      }
    }};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ look, sizeDesktop }) => {
      if (sizeDesktop) {
        return sizeDesktop;
      }

      switch (look) {
        case 'subscribe':
          return '21px 138px';
        case 'subscribe_dark':
          return '21px 138px';
        case 'rounded':
          return '50px 42px';
        case 'rounded_dark':
          return '50px 42px';
        case 'logout':
          return '21px 39px';
        case 'cancel':
          return '21px 39px';
        default:
          return '#22252a';
      }
    }};
  }
  :hover,
  :focus {
    background-color: ${({ look }) => {
      switch (look) {
        case 'subscribe':
          return '#8baa36';
        case 'subscribe_dark':
          return '#1E1F28';
        case 'rounded':
          return '#8baa36';
        case 'rounded_dark':
          return '#22252a';
        case 'logout':
          return '#22252a';
        case 'cancel':
          return '#ffffff';
        default:
          return '#22252a';
      }
    }};
    color: ${({ look }) => {
      switch (look) {
        case 'rounded':
          return '#fafafa';
        case 'rounded_dark':
          return '#fafafa';
        case 'logout':
          return '#fafafa';
        case 'subscribe_dark':
          return '#8baa36';
        default:
          return '#22252a';
      }
    }};
    border: ${({ look }) => look === 'cancel' && '1px solid #23262a'};
  }
`;
