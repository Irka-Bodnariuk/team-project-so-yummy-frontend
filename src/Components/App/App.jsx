import { useState } from 'react';
import { merge, get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../theme';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
// import { Button } from 'Components/Button/Button';
import Footer from 'Layout/Footer/Footer';

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
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/search" element={<Footer />} />
          <Route path="/add" element={<Footer />} />
          <Route path="/my" element={<Footer />} />
          <Route path="/favorite" element={<Footer />} />
          <Route path="/shopping-list" element={<Footer />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
