import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationWrapper = styled.div`
  margin: 0 auto;
  height: 51px;
  width: 275;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 26px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);

  @media screen and (min-width: 768px) {
    height: 55px;
    width: 436px;
  }
`;

export const PaginBox = styled(Pagination)`
  & .button[aria-current] {
    background-color: #ebf3d4;
    color: #22252a;
  }
  & .button[aria-current]:hover,
  & .button:hover {
    background-color: #cce681;
  }
`;

// .mui button:hover {
//   background-color: #cce681;
// }
