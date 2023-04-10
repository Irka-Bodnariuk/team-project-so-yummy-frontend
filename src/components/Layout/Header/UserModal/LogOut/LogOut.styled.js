import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  margin-left: auto;
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

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;
