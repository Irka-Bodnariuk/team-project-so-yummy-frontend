import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 138px;
  padding: ${({ look }) =>
    look === 'logout' || look === 'cancel' ? '21px 39px;' : '21px 138px'};

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: ${({ look }) => (look === 'cancel' ? '#23262A' : '#fafafa')};

  background-color: ${({ look }) => {
    switch (look) {
      case 'subscribe':
        return '#8baa36';
      case 'subscribe_dark':
        return '#1E1F28';
      case 'logout':
        return '#8baa36';
      case 'cancel':
        return '#D9D9D9';
      default:
        return '#22252a';
    }
  }};
  border: 1px solid transparent;
  border-radius: 6px;

  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  :hover,
  :focus {
    background-color: ${({ look }) => {
      switch (look) {
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
