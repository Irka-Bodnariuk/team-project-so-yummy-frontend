import React, { useState } from "react";
import { merge, get } from "lodash";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../../theme";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "store/auth/authOperations";
import { WellcomePage, LoginPage, SingUpPage, MainPage } from "pages";
import { SharedLayout } from "components/Layout/SharedLayout/SharedLayout";

import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useSelector((state) => state.auth);
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);
  const theme = getTheme(mode);

  React.useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    setMode("light");
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!isRefreshing && (
          <Routes>
            {!isLoggedIn && <Route index element={<WellcomePage />} />}

            {isLoggedIn && (
              <Route
                path="/"
                element={<SharedLayout colorModeContext={ColorModeContext} />}
              >
                <Route
                  path="/main"
                  element={
                    <PrivateRoute component={MainPage} redirectTo="/login" />
                  }
                />
              </Route>
            )}

            <Route
              index
              path="/register"
              element={
                <RestrictedRoute component={SingUpPage} redirectTo="/" />
              }
            />
            <Route
              path="/signin"
              element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
            />
          </Routes>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
