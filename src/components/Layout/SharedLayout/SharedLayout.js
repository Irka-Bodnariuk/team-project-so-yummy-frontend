import React from 'react';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import { LayoutContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
      <Header />
    </div>
  );
};
