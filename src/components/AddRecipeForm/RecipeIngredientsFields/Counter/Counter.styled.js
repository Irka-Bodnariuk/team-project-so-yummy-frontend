import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  padding: 4px 0;
  display: flex;
  align-items: center;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 14px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${p =>
      p.value <= 1
        ? p.theme.colors.button.primaryCancelBg
        : p.theme.colors.accentColor};
    width: 14px;
    height: 14px;
  }
`;

export const Value = styled.span`
  font-size: 14px;
  line-height: 1.29;
`;
