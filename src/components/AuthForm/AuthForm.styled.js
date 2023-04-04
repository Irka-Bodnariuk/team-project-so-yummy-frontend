import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

export const FormWrapper = styled.div`
  position: absolute;
  top: 305px;
  left: 50%;

  width: 335px;
  height: auto;
  margin: 0 auto;
  padding: 40px 28px;

  background-color: ${p => p.theme.colors.form.formBackground};
  border-radius: 30px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  transform: translateX(-50%);
`;

export const FormTitle = styled.h1`
  margin-bottom: 18px;

  font-weight: ${p => p.theme.fontWeights.title};
  font-size: ${p => p.theme.fontSizes.xl}px;
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: -0.02em;

  color: #fafafa;
`;

export const FormInputWrapper = styled.div`
  position: relative;
`;

export const IconName = styled(FiUser)`
  position: absolute;
  top: 50%;
  color: white;
`;

export const FormInput = styled(Field)`
  width: 100%;
  height: 45px;
  padding-left: 40px;

  color: ${p => p.theme.colors.form.inputBorder};
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;

  opacity: 0.8;

  ::placeholder {
    font-family: 'Poppins';
    font-size: ${p => p.theme.fontSizes.s}px;
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: -0.02em;

    color: #fafafa;
  }

  :focus {
    opacity: 1;
    outline: none;

    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }
`;

export const FormLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: -28px;

  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-decoration-line: underline;

  color: #fafafa;

  transform: translateX(-50%);
`;
