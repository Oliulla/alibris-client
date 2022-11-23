import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home/Home';

const Root = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
};

export default Root;