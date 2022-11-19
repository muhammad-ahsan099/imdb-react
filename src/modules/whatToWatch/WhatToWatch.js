import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from './WhatToWatchStyle';
import { commonColor } from '../../constants/colors';
import MovieCard from '../../common/movieCard/MovieCard';
import { useSelector } from 'react-redux';
import { UseWhatToWatch } from './UseWhatToWatch';
import { Button, Grid } from '@material-ui/core';
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';
import { StageSpinner } from "react-spinners-kit";
import Loader from '../../common/loader/Loader';


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function WhatToWatch() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [
        {
            loading,
            isUserLoggedIn,
            allTopPickMovies,
            allFanFavoritesMovies,
            mostPopularMovies,
            userWishlist,
        }
    ] = UseWhatToWatch()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>What to Watch - IMDb</h1>
            <AppBar position="static" color="default" elevation={false} className={classes.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    aria-label="full width tabs example"
                    indicatorColor={'secondary'}
                    className={classes.tabs}
                    variant={'scrollable'}
                    TabIndicatorProps={{ style: { background: commonColor.themeColor, color: 'green' } }}
                >
                    <Tab
                        wrapped
                        label="FAN FAVOURITES"
                        {...a11yProps(0)}
                        classes={{ root: classes.tab }}
                        style={{ color: value == 0 ? commonColor.themeColor : '#fff' }}
                    />
                    <Tab
                        wrapped
                        label="TOP PICKS"
                        {...a11yProps(1)}
                        classes={{ root: classes.tab }}
                        style={{ color: value == 1 ? commonColor.themeColor : '#fff' }}
                    />
                    <Tab
                        wrapped
                        label="FROM YOUR WATCHLIST"
                        {...a11yProps(2)}
                        classes={{ root: classes.tab }}
                        style={{ color: value == 2 ? commonColor.themeColor : '#fff' }}
                    />
                    <Tab
                        wrapped
                        label="MOST POPULAR"
                        {...a11yProps(3)}
                        classes={{ root: classes.tab }}
                        style={{ minWidth: 100, color: value == 3 ? commonColor.themeColor : '#fff' }}
                    />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <div
                    role="tabpanel"
                    hidden={value !== 0}
                    id={`full-width-tabpanel-${0}`}
                    aria-labelledby={`full-width-tab-${0}`}
                >
                    {value === 0 && (
                        <Grid container spacing={2} className={classes.gridContainer}>
                            {
                                loading ?
                                    <Loader />
                                    :
                                    <>
                                        {
                                            allFanFavoritesMovies?.map((item, index) => {
                                                return (
                                                    <Grid item xs={6} sm={3} md={2} lg={2} className={classes.tabsDiv} key={item?.id}>
                                                        <MovieCard moviesData={item} key={item.id} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </Grid>
                    )}
                </div>
                <div
                    role="tabpanel"
                    hidden={value !== 1}
                    id={`full-width-tabpanel-${1}`}
                    aria-labelledby={`full-width-tab-${1}`}
                >
                    {value === 1 && (
                        <Grid container spacing={2} className={classes.gridContainer}>
                            {
                                loading ?
                                    <Loader />
                                    :
                                    <>
                                        {
                                            allTopPickMovies?.map((item, index) => {
                                                return (
                                                    <Grid item xs={6} sm={3} md={2} lg={2} className={classes.tabsDiv} key={item?.id}>
                                                        <MovieCard moviesData={item} key={item.id} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </Grid>
                    )}
                </div>
                <div
                    role="tabpanel"
                    hidden={value !== 2}
                    id={`full-width-tabpanel-${2}`}
                    aria-labelledby={`full-width-tab-${2}`}
                >
                    {value === 2 && (
                        <>
                            {
                                !isUserLoggedIn ?
                                    <div className={classes.contentContainer}>
                                        <BookMarkButton />
                                        <span className={classes.contentHeading}>
                                            Sign in to access your Watchlist
                                        </span>
                                        <br />
                                        <span className={classes.contentDes}>
                                            Save shows and movies to keep track of what you want to watch.
                                        </span>
                                        {/* Sign in Button */}
                                        <div className={classes.signInButtonDiv}>
                                            <Button variant="contained" size="medium" className={classes.signInButton}>
                                                Sign in to IMDb
                                            </Button>
                                        </div>
                                    </div>
                                    :
                                    <Grid container spacing={2} className={classes.gridContainer}>

                                        {
                                            loading ?
                                                <Loader />
                                                :
                                                <>
                                                    {
                                                        userWishlist?.to_watch?.map((item, index) => {
                                                            return (
                                                                <Grid item xs={6} sm={3} md={2} lg={2} className={classes.tabsDiv} key={item?.id}>
                                                                    <MovieCard moviesData={item} key={item.id} />
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </>
                                        }
                                    </Grid>

                            }
                        </>
                    )}
                </div>
                <div
                    role="tabpanel"
                    hidden={value !== 3}
                    id={`full-width-tabpanel-${3}`}
                    aria-labelledby={`full-width-tab-${3}`}
                >
                    {value === 3 && (
                        <Grid container spacing={2} className={classes.gridContainer}>
                            {
                                loading ?
                                    <Loader />
                                    :
                                    <>
                                        {
                                            mostPopularMovies?.map((item, index) => {
                                                return (
                                                    <Grid item xs={6} sm={3} md={2} lg={2} className={classes.tabsDiv} key={item?.id}>
                                                        <MovieCard moviesData={item} key={item.id} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </Grid>
                    )}
                </div>
            </SwipeableViews >
        </div >
    );
}
