import React, { useState } from 'react';
import { merge, get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../theme';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'store/auth/authOperations';
import { WellcomePage, LoginPage, SingUpPage, MainPage } from 'pages';
import { SharedLayout } from 'Layout/SharedLayout/SharedLayout';
import { RestrictedRoute } from 'Components/RestrictedRoute';
import { PrivateRoute } from 'Components/PrivateRoute';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector(state => state.auth);
  const [mode, setMode] = useState('light');
  const darkMode = useSelector(state => state.theme.darkMode);
  const theme = getTheme(mode);

  React.useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  useEffect(() => {
    setMode('light');
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RegisterPage />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
