import React from 'react';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';


export const SharedLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <Header />
    </div>
  );
};
