import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 28px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};
`;

export const InstructionList = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const IconNum = styled.span`
  flex-basis: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  min-height: 21px;
  padding: 5px 13px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: ${p => p.theme.colors.secondaryTextColor};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.accentColor};
`;

export const Instruction = styled.p`
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};
`;

export const BoxImg = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
