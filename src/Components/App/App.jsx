import { useState } from 'react';
import { merge, get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../theme';
import { MainDiv } from './SomeComp';
import { useEffect } from 'react';
// import { Button } from 'Components/Button/Button';
import { WellcomePage } from 'pages/WellcomePage/WellcomePage';

const modes = ['light', 'dark'];

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export const App = () => {
  const [mode, setMode] = useState(modes[0]);
  const theme = getTheme(mode);

  useEffect(() => {
    setMode(modes[0]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainDiv>
        <WellcomePage />
      </MainDiv>
    </ThemeProvider>
  );
};
