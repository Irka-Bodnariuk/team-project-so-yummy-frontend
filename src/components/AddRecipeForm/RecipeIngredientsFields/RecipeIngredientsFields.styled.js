import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';

export const FieldsetIngredients = styled.fieldset`
  position: relative;
  margin-bottom: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const ContainerError = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 55px;
`;

export const Label = styled.label`
  position: relative;
  flex-grow: 1;
`;

export const LabelMeasure = styled.div`
  position: relative;
  display: flex;
`;

export const SelectIngredients = styled(Select)`
  svg {
    fill: ${p => p.theme.colors.accentColor};
  }
  &.сustom-select-container {
    border-radius: 6px;
  }
  .сustom-select__control {
    background-color: ${p => p.theme.colors.form.formIngredientsBackground};
    border: none;
  }
  .сustom-select__control--menu-is-open {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__control--is-focused {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.form.formBottomLine};
  }
  .сustom-select__dropdown-indicator,
  .сustom-select__indicator-separator {
    display: none;
  }
  .сustom-select__value-container {
    padding: 16px;
  }
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.form.formAddText};
  }
  .сustom-select__single-value {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.form.labelText};
  }
  .сustom-select__menu-list {
    max-height: 210px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.form.formBottomLine};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${p => p.theme.colors.form.inputBorder};
      border-radius: 5px;
    }
  }
  .сustom-select__option {
    font-size: 12px;
    line-height: 1.5;
    opacity: 0.5;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.accentColor};
      opacity: 1;
    }
  }
  .сustom-select__option--is-selected {
    background-color: ${p => p.theme.colors.accentColor};
    opacity: 1;
  }
`;

export const SelectMeasure = styled(Select)`
  width: 70px;

  svg {
    fill: ${p => p.theme.colors.accentColor};
  }
  &.сustom-select-container {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: ${p => `${100 - p.idx}`};
  }
  .сustom-select__control {
    background-color: ${p => p.theme.colors.form.formIngredientsBackground};
    border: none;
  }
  .сustom-select__control--menu-is-open {
    box-shadow: none;
  }
  .сustom-select__control--is-focused {
    box-shadow: none;
  }
  .сustom-select__indicator {
    padding: 8px 8px 8px 0;
  }
  .сustom-select__clear-indicator,
  .сustom-select__indicator-separator {
    display: none;
  }
  .сustom-select__value-container {
    padding: 16px 3px 16px 3px;
  }
  .сustom-select__menu-notice,
  .сustom-select__placeholder,
  .сustom-select__input-container {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.form.formAddText};
  }
  .сustom-select__single-value {
    font-size: ${p => `${p.theme.fontSizes.s}px`};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.form.labelText};
  }
  .сustom-select__menu {
    left: -47px;
    width: 118px;
  }
  .сustom-select__menu-list {
    max-height: 210px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.form.formBottomLine};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${p => p.theme.colors.form.inputBorder};
      border-radius: 5px;
    }
  }
  .сustom-select__option {
    padding: 8px 12px 8px 50px;
    font-size: ${p => `${p.theme.fontSizes.xs}px`};
    line-height: 1.5;
    opacity: 0.5;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.accentColor};
      opacity: 1;
    }
  }
  .сustom-select__option--is-selected {
    background-color: ${p => p.theme.colors.accentColor};
    opacity: 1;
  }
`;

export const InputText = styled(Field)`
  padding: 16px;
  width: 118px;
  background-color: ${p => p.theme.colors.form.formIngredientsBackground};
  border: none;
  border-radius: 6px;
  outline-color: ${p => p.theme.colors.form.formBottomLine};
`;

export const RemoveFieldsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${p => p.theme.colors.form.formAddIcon};
    width: 18px;
    height: 18px;
  }
`;
