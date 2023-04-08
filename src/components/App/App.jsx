import React, { useState, useEffect, useMemo } from "react";
import { merge, get } from "lodash";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../../theme";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "store/auth/authOperations";
import { SigninPage } from "pages/SigninPage/SigninPage";
import {
  RegisterPage,
  WellcomePage,
  MainPage,
  CategoriesPage,
  AddRecipePage,
  Favorite,
  RecipePage,
  MyRecipes,
  SearchPage,
  ShoppingPage,
} from "pages";
import { SharedLayout } from "components/Layout/SharedLayout/SharedLayout";
import { PrivateRoute, RestrictedRoute } from "components/Routes";

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

  useMemo(() => {
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
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {!isRefreshing && (
          <Routes>
            {!isLoggedIn && <Route index element={<WellcomePage />} />}

            <Route
              path="/"
              element={<SharedLayout colorModeContext={ColorModeContext} />}
            >
              <Route
                path="main"
                element={
                  <PrivateRoute component={MainPage} redirectTo="/signin" />
                }
              />

              <Route
                path="categories/:categoryName"
                element={<PrivateRoute component={CategoriesPage} />}
              />

              <Route
                path="add"
                element={<PrivateRoute component={AddRecipePage} />}
              />

              <Route
                path="favorite"
                element={<PrivateRoute component={Favorite} />}
              />

              <Route
                path="recipe/:recipeId"
                element={<PrivateRoute component={RecipePage} />}
              />

              <Route
                path="my"
                element={<PrivateRoute component={MyRecipes} />}
              />

              <Route
                path="search"
                element={<PrivateRoute component={SearchPage} />}
              />

              <Route
                path="shopping-list"
                element={<PrivateRoute component={ShoppingPage} />}
              />
            </Route>

            <Route
              index
              path="/register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/main" />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute component={SigninPage} redirectTo="/main" />
              }
            />
          </Routes>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
