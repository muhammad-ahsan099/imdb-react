import React, { useState } from 'react';
import TvIcon from '@material-ui/icons/Tv';
import Movies from '@material-ui/icons/TheatersRounded';
import Celebs from '@material-ui/icons/PeopleRounded';
import Watch from '@material-ui/icons/VideoLibraryRounded';
import Community from '@material-ui/icons/PublicRounded';
import { MdStars } from "react-icons/md";

import useStyles from './DrawerStyle';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout, fetchProfile } from '../../redux/actions/AuthAction';
import { getToken } from '../localStorage/LocalStorage';
import { useEffect } from 'react';

export const UseDrawer = () => {
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const userProfile = useSelector(state => state.AuthReducer.userProfile)
  const [loading, setLoading] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false);

  let { access_token } = getToken()
  // console.log('Access Token', access_token);
  console.log('User Profile', userProfile);

  const menuItems = [
    {
      heading: 'Movies',
      icon: <Movies />,
      subTitles: [
        {
          title: 'Release Calender',
          path: '/',
        },
        {
          title: 'Top 250 Movies',
          path: '/'
        },
        {
          title: 'Top Popular Movies',
          path: '/',
        },
        {
          title: 'Browse Movies By Genre',
          path: '/'
        },
        {
          title: 'Top Box Office',
          path: '/',
        },
        {
          title: 'Showtimes & Tickets',
          path: '/'
        },
        {
          title: 'Movie News',
          path: '/',
        },
        {
          title: 'India Movie Spotlight',
          path: '/'
        },
      ],
    },
    {
      heading: 'TV Shows',
      icon: <TvIcon />,
      subTitles: [
        {
          title: "What's on TV & Streaming",
          path: '/'
        },
        {
          title: 'Top 250 TV Shows',
          path: '/'
        },
        {
          title: 'Most Popular TV Shows',
          path: '/',
        },
        {
          title: 'Browse Movies By Genre',
          path: '/'
        },
        {
          title: 'TV News',
          path: '/'
        },
        {
          title: 'India Movie Spotlight',
          path: '/'
        },
      ]
    },
    {
      heading: 'Watch',
      icon: <Watch />,
      subTitles: [
        {
          title: "What to Watch",
          path: '/'
        },
        {
          title: 'Latest Trailers',
          path: '/'
        },
        {
          title: 'IMDb Originals',
          path: '/',
        },
        {
          title: 'IMDb Picks',
          path: '/'
        },
        {
          title: 'IMDb Podcasts',
          path: '/'
        },
      ]
    },
    {
      heading: 'Awards & Events',
      icon: <MdStars />,
      subTitles: [
        {
          title: 'Oscars',
          path: ''
        },
        {
          title: 'Best Picture Winners',
          path: ''
        },
        {
          title: 'Emmys',
          path: ''
        },
        {
          title: 'STARmeter Awards',
          path: ''
        },
        {
          title: 'San Diego Comic-Con',
          path: ''
        },
        {
          title: 'New York Comic-Con',
          path: ''
        },
        {
          title: 'Sundance Film Festival',
          path: ''
        },
        {
          title: "Toronto Int'l Film Festival",
          path: ''
        },
        {
          title: 'Awards Central',
          path: ''
        },
        {
          title: 'Festival Central',
          path: ''
        },
        {
          title: 'All Events',
          path: ''
        },
      ]
    },
    {
      heading: 'Celebs',
      icon: <Celebs />,
      subTitles: [
        {
          title: "Born Today",
          path: '/'
        },
        {
          title: 'Most Popular Celebs',
          path: '/'
        },
        {
          title: 'Celebrity News',
          path: '/',
        },
      ]
    },
    {
      heading: 'Community',
      icon: <Community />,
      subTitles: [
        {
          title: "Help Center",
          path: '/'
        },
        {
          title: 'Contributor Zone',
          path: '/'
        },
        {
          title: 'Polls',
          path: '/',
        },
      ]
    },
  ];


  const logoutHandler = ()=> {
    dispatch(doLogout(setLoading))
  }
  
  useEffect(() => {
    console.log('Use Effect is Running');
    dispatch(fetchProfile(setLoading))
  }, [])
  

  const accountOptions = [
    {
      title: 'Your activity',
      path: '/'
    },
    {
      title: 'Your watchlist',
      path: '/'
    },
    {
      title: 'Your ratings',
      path: '/'
    },
    {
      title: 'Your lists',
      path: '/'
    },
    {
      title: 'Account settings',
      path: '/'
    },
    {
      title: 'Sign out',
      logout: logoutHandler
    },
  ]




  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }


  return [{
    isUserLoggedIn,
    userProfile,
    menuItems,
    mobileOpen,
    handleDrawerToggle,
    accountOptions,
  }]
}
