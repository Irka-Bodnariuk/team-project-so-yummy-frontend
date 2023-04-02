import React from 'react';
import { Button } from 'Components/Button/Button';
import {
  Main,
  Title,
  Subtitle,
  SvgWrapper,
  ButtonsWrapper,
} from './WellcomePage.styled';
import { Box } from 'Components/Box';
import { AddSvg } from 'Components/AddSvg/AddSvg';

export const WellcomePage = () => {
  return (
    <Main>
      <Box>
        <SvgWrapper>
          <AddSvg name="icon-logo_desc" />
        </SvgWrapper>
        <Title>Welcome to the app!</Title>
        <Subtitle>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Subtitle>
        <ButtonsWrapper>
          <Button
            look="rounded_dark"
            fontSize="14px"
            fontSizeTablet="16px"
            size="40px 24px"
            sizeTablet="50px 42px"
          >
            Registration
          </Button>
          <Button
            look="rounded"
            fontSize="14px"
            fontSizeTablet="16px"
            size="40px 24px"
            sizeTablet="50px 42px"
          >
            Sign In
          </Button>
        </ButtonsWrapper>
      </Box>
    </Main>
  );
};
