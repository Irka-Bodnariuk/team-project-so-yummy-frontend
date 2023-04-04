import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  width: 204px;
  padding: 11.5px 42px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.button.mainTextColor};
  background-color: ${p => p.theme.colors.footerBg};
  border: 1px solid #FAFAFA;
  border-radius: 6px;
  opacity: 0.16;
  
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: #FAFAFA;
    opacity: 1;
  }
`;

export const EmailIcon = styled.svg`
  position: absolute;
  top: 10px;
  left: 15px;
`;

export const NameInput = styled.label`
  position: relative;
`;