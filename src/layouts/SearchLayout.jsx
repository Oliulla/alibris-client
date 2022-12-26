import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import SearchBooks from '../pages/SearchBooks/SearchBooks';
import ScrollToTop from '../utils/ScrollToTop';

const SearchLayout = () => {
    return (
        <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
    );
};

export default SearchLayout;