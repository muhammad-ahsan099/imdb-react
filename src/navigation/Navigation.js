import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// import ForgotPassword from '../modules/auth/forgotPassword/ForgotPassword';
// import PageNotFound from '../common/PageNotFound';
import { PublicRouting } from './PublicRouting';
import { PrivateRouting } from './PrivateRouting';

import SignIn from '../modules/auth/signIn/SignIn';
import CreateAccount from '../modules/auth/createAccount/CreateAccount';
import SignInGoogle from '../modules/auth/signInGoogle/SignInGoogle';

import LandingPage from '../modules/landingPage/LandingPage';
import DetailPage from '../modules/detailPage/DetailPage';
import TrailersPage from '../modules/trailersPage/TrailersPage';
import DrawerComponent from '../common/drawer/Drawer';
import Footer from '../common/footer/Footer';
import WhatToWatch from '../modules/whatToWatch/WhatToWatch';
import ResetPassword from '../modules/auth/resetPassword/ResetPassword';
import ForgotPassword from '../modules/auth/forgotPassword/ForgotPassword';

export default function Navigation() {
    let location = useLocation();
    console.log('Log location name: ', location.pathname)
    let navigate = useNavigate()


    let authState = false;

    useEffect(() => {
        if (!authState) {
            navigate(location.pathname)
        }
    }, [])
    return (
        <>
            {
                location.pathname === '/create-account'
                    ||
                    location.pathname === '/reset-password/:id/:token'
                    ||
                    location.pathname === '/forgot-password'
                    ||
                    location.pathname === '/login' ?
                    null
                    :
                    <DrawerComponent />
            }
            <Routes>
                <Route
                    path='/login'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <SignIn />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/create-account'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <CreateAccount />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/registration'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <SignInGoogle />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/reset-password/:id/:token'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <ResetPassword />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/forgot-password'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <ForgotPassword />
                        </PublicRouting>
                    }
                />
                {/* <Route
                    path="api/user/reset/:id/:token"
                    element={<ResetPassword />}
                /> */}
                {/* <Route
                    path='/:pageName'
                    element={<PageNotFound />
                    }
                /> */}

                <Route
                    path='/'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <LandingPage />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/movie-detail/:imdb_id/:id'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <DetailPage />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/movie-trailer/:imdb_id/:id'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <TrailersPage />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/what-to-watch'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <WhatToWatch />
                        </PublicRouting>
                    }
                />
                {/* <Route
                    path='/profile'
                    element={
                        <PrivateRouting isAllowed={authState}>
                            <Profile />
                        </PrivateRouting>
                    }
                /> */}
            </Routes>

            {
                location.pathname === '/create-account'
                    ||
                    location.pathname === '/reset-password/:id/:token'
                    ||
                    location.pathname === '/forgot-password'
                    ||
                    location.pathname === '/login' ?
                    null
                    :
                    <Footer />
            }
        </>
    );
}
