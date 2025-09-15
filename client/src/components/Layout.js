import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet /> {/* Renders the current page component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;