import React from 'react';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import ErrorPage404 from '../pages/ErrorPage404/ErrorPage404';

const BaseLayout = () => {
    return (
        <>
            <Navigation />

            <Outlet />

            <Footer />
        </>
    );
};

export default BaseLayout;