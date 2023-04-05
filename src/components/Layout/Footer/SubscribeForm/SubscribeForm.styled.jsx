import styled from "styled-components";
import { Field, Form } from "formik";

export const Input = styled(Field)`
  padding: 10px 42px;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xxs}px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.button.mainTextColor};
  background-color: ${p => p.theme.colors.footerBg};
  border: 1px solid ${p => p.theme.colors.footerText};
  border-radius: 6px;
  opacity: 0.16;
  
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: ${p => p.theme.colors.footerText};
    opacity: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 259px;
    padding: 15px 40px  15px 52px;
    margin-bottom: ${p => p.theme.space[0]}px;
    margin-right: ${p => p.theme.space[2] * 3}px;
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: 21px;
  }

  @media screen and (min-width: 1440px) {
    padding: 17.5px 70.5px  17.5px 51.5px;
    width: 339px;
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: 27px;
  }
`;

export const EmailIcon = styled.svg`
  position: absolute;
  width: 16px;
  height: 12px;
  top: 10px;
  left: 14px;

  @media screen and (min-width: 768px) {
   width: 20px;
   height: 16px;
   top: 18px;
   left: 15px;
  }

  @media screen and (min-width: 1440px) {
    top: 4px;
    left: 15px;
  }
`;

export const NameInput = styled.label`
  position: relative;
`;

export const FormSubscribe = styled(Form)`
  width: 204px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 442px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

export const WrapperForm = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 44px;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 38px;
  }

   @media screen and (min-width: 1440px) {
    width: 339px;
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[2] * 7}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.footerText};
`;

export const Title = styled.p`
  margin-bottom: ${p => p.theme.space[1] * 7}px;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 27px;
  color: ${p => p.theme.colors.footerText};
`;