import { useState } from 'react';
import { merge, get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../theme';
import { MainText, MainDiv } from './SomeComp';

const modes = ['light', 'dark'];

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export const App = () => {
  const [mode, setMode] = useState(modes[0]);
  const theme = getTheme(mode);
  // setMode(modes[0]);

  return (
    <ThemeProvider theme={theme}>
      <MainDiv>
        <MainText>React homework template</MainText>
      </MainDiv>
    </ThemeProvider>
  );
};
