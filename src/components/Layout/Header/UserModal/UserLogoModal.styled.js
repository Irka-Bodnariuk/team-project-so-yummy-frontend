import styled from 'styled-components';

import { FiEdit2, FiArrowRight } from 'react-icons/fi';

export const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;

  /* background-color: rgba(0, 0, 0, 0.5); */
`;

export const Modal = styled.div`
  position: absolute;
  padding: 18px;
  background: #fafafa;
  border: 1px solid #8baa36;
  border-radius: 8px;
  top: 72px;
  right: 60px;

  @media screen and (min-width: 768px) {
    top: 78px;
    right: 128px;
  }
  @media screen and (min-width: 1440px) {
    right: 211px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
  /* margin-right: 37px;
  @media screen and (min-width: 768px) {
    margin-right: 53px;
  } */
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  &:hover {
    color: #8baa36;
  }
`;

export const EditIcon = styled(FiEdit2)`
  width: 14px;
  height: 14px;
`;

export const LogOutIcon = styled(FiArrowRight)`
  width: 18px;
  height: 18px;
  margin-left: 4px;
`;
