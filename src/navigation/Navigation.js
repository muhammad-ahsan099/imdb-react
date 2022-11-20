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
import MostPopularCelebs from '../modules/mostPopularCelebs/MostPopularCelebs';
import MostPopularMovies from '../modules/mostPopularMovies/MostPopularMovies';
import Top250Movies from '../modules/top250Movies/Top250Movies';
import CelebrityDetail from '../modules/celebrityDetail/CelebrityDetail';
import Watchlist from '../modules/watchlist/Watchlist';
import UserList from '../modules/userList/UserList';
import { useSelector } from 'react-redux';
import GenreList from '../modules/genreList/GenreList';
import SingleGenre from '../modules/signleGenre/SingleGenre';


export default function Navigation() {
    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
    let location = useLocation();
    console.log('Log location name: ', location.pathname)
    let navigate = useNavigate()

    useEffect(() => {
        if (!isUserLoggedIn) {
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
                        <PublicRouting isAllowed={isUserLoggedIn}>
                            <SignIn />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/create-account'
                    element={
                        <PublicRouting isAllowed={isUserLoggedIn}>
                            <CreateAccount />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/registration'
                    element={
                        <PublicRouting isAllowed={isUserLoggedIn}>
                            <SignInGoogle />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/reset-password/:id/:token'
                    element={
                        <PublicRouting isAllowed={isUserLoggedIn}>
                            <ResetPassword />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/forgot-password'
                    element={
                        <PublicRouting isAllowed={isUserLoggedIn}>
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
                        <LandingPage />
                    }
                />
                <Route
                    path='/movie-detail/:imdb_id/:id'
                    element={
                        <DetailPage />
                    }
                />
                <Route
                    path='/movie-trailer/:imdb_id/:id'
                    element={
                        <TrailersPage />
                    }
                />
                <Route
                    path='/what-to-watch'
                    element={
                        <WhatToWatch />
                    }
                />
                <Route
                    path='/most-popular-movies'
                    element={
                        <MostPopularMovies />
                    }
                />
                <Route
                    path='/top-250-movies'
                    element={
                        <Top250Movies />
                    }
                />

                <Route
                    path='/most-popular-celebs'
                    element={
                        <MostPopularCelebs />
                    }
                />

                <Route
                    path='/genre-list'
                    element={
                        <GenreList />
                    }
                />
                <Route
                    path='/genre/search/title/:title'
                    element={
                        <SingleGenre />
                    }
                />


                <Route
                    path='/celebrity-detail/:id'
                    element={
                        <CelebrityDetail />
                    }
                />
                <Route
                    path='/user-watchlist'
                    element={
                        <PrivateRouting isAllowed={isUserLoggedIn}>
                            <Watchlist />
                        </PrivateRouting>
                    }
                />
                <Route
                    path='/user-list'
                    element={
                        <PrivateRouting isAllowed={isUserLoggedIn}>
                            <UserList />
                        </PrivateRouting>
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
