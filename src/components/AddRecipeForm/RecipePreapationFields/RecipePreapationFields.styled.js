import styled from 'styled-components';
import { Field } from 'formik';

export const FieldsetPreparation = styled.fieldset`
  margin-bottom: 18px;
  padding: 0;
  border: none;
`;

export const Textarea = styled(Field)`
  padding: 10px 16px;
  height: 154px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: ${p => `${p.theme.fontSizes.s}px`};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.form.formAddText};
  background-color: ${p => p.theme.colors.form.formIngredientsBackground};
  outline-color: ${p => p.theme.colors.form.formBottomLine};
  border: none;
  border-radius: 6px;
  resize: none;
`;