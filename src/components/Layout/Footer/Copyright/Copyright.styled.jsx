import styled from "styled-components";

export const WrapperCopytight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: ${p => p.theme.colors.bacground};

  @media screen and (min-width: 768px) {
   height: 78px;
  }

   @media screen and (min-width: 768px) {
   height: 114px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.heroText};

  @media screen and (min-width: 768px) {
   font-size: 14px;
   line-height: 14px;
  }
`;

export const Background = styled.div`
  
`;