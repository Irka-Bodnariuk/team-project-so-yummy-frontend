import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FiEdit2, FiUser } from 'react-icons/fi';
import { Form, Field } from 'formik';

export const FormSubscribe = styled(Form)`
  margin-bottom: 8px;
  margin-top: 8px;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  border: none;
  color: #8baa36;
  fill: #333333;
  stroke: #333333;
`;

export const CloseIcon = styled(GrClose)`
  width: 20px;
  height: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrap = styled.div`
  position: relative;
  margin-bottom: 34px;
`;
export const Photo = styled.img`
  margin: 0 auto;
  padding: 0;
  width: 88px;
  height: 88px;
  border-radius: 88px;
`;
export const ButtonAdd = styled.button`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  border: none;

  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  color: #8baa36;
  fill: #333333;
  stroke: #333333;
`;

export const PlusIcon = styled(BsFillPlusCircleFill)`
  width: 24px;
  height: 24px;
`;

export const WrapInput = styled.div`
  position: relative;
  color: #23262a;
  &::placeholder > svg {
    color: #8baa36;
  }
`;
export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 17px;
  left: 14px;
  width: 18px;
  height: 18px;
`;
export const EditIcon = styled(FiEdit2)`
  position: absolute;
  top: 17px;
  right: 14px;
  width: 18px;
  height: 18px;
`;

export const Input = styled(Field)`
  padding: 15px 40px 11px 40px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #23262a;

  width: 282px;

  border: 1px solid #23262a;
  border-radius: 6px;
  margin-bottom: 24px;

  /* &::placeholder > svg {
    color: #8baa36;
    opacity: 0.8;
  } */
`;

export const NameInput = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #23262a;
  opacity: 0.8;
`;

export const InputFile = styled.input``;
