
import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CrossIcon from '@material-ui/icons/CloseRounded';
import clsx from "clsx";
import videoIcon from "../../assets/images/videoIcon.svg";


// import Style at the End of imports 
import { useStyles } from './SearchbarStyle';
import PopperSearch from '../popperComponent/popperSearch/PopperSearch';
import { ClickAwayListener, Fade, Hidden, IconButton, Paper, Popper } from '@material-ui/core';
import { UseSearchbar } from './UseSearchbar';
import { Link } from 'react-router-dom';

export default function Searchbar() {
    const classes = useStyles();
    const [
        {
            loading,
            query, setQuery,
            searchActive, setSearchActive,
            mobShow, setMobShow,
            anchorEl, setAnchorEl,
            open, setOpen,
            handleToggle,
            handleClose,
            searchMovies,
        }
    ] = UseSearchbar()

    const [videos, setVideos] = useState([])

    return (
        <>
            <Hidden xsDown>
                <div className={clsx(classes.searchContainer, searchActive && classes.outLine)} >
                    <PopperSearch />
                    <div className={classes.divider} />
                    <input
                        type={"text"}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={classes.input}
                        placeholder='Search IMDb'
                        onFocus={(event) => {
                            setSearchActive(true);
                            handleToggle(event)
                        }}
                        onBlur={() => {
                            setSearchActive(false);
                            setQuery('')
                            handleClose()
                        }}
                    />
                    <div className={classes.icon}>
                        <SearchIcon style={{ color: "#92929D" }} />
                    </div>
                </div>
            </Hidden>

            <Hidden smUp>
                <div className={classes.searchBtn} >
                    <IconButton
                        color="inherit"
                        aria-label="search"
                        onClick={() => setMobShow(!mobShow)}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
                {
                    mobShow
                    &&
                    <div className={classes.mobileSearch}>
                        <input
                            type={"text"}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={classes.inputMobile}
                            placeholder='Search IMDb'
                        />
                        <div className={classes.icon}
                            onClick={() => setMobShow(false)}
                        >
                            <CrossIcon style={{ color: "#fff" }} />
                        </div>
                    </div>
                }
            </Hidden>

            <div className={classes.root}>
                <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition disablePortal keepMounted={true} className={classes.Popper}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper style={{maxHeight: 200, marginTop: 10}}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <>
                                        {
                                            searchMovies?.length !== 0 ?
                                                query.trim() !== '' &&
                                                searchMovies?.map((item) => {
                                                    return (
                                                        <div className={classes.searchModal} key={item?.id}>
                                                            <Link to={`/movie-detail/${item?.imdb_id}/${item?.id}`} className={classes.Link}>
                                                                <div className={classes.searchDiv}>
                                                                    <img src={item?.poster_url} alt={'Poster'} className={classes.img} />
                                                                    <div className={classes.rightSection}>
                                                                        <p className={classes.movieName}>{item?.title ? item?.title : 'Top Gun'}</p>
                                                                        <p className={classes.year}>{item?.year ? item?.year : '2022'}</p>
                                                                        <p className={classes.year}>Action, Thriller</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <div className={classes.cardDiv} >
                                                                {
                                                                    item?.video_gallery?.slice(0, 2)?.map((videoUrl, ind) => {
                                                                        return (
                                                                            <Link to={`/movie-trailer/${item?.imdb_id}/${item?.id}`}>
                                                                                <div key={ind} className={classes.cardHeader}>
                                                                                    <img src={videoUrl?.video_poster_url ? videoUrl?.video_poster_url : 'https://m.media-amazon.com/images/M/MV5BNGIxM2IwOTgtYzg2Yy00OGM0LWE4MzItMTYyNWNjOGU3OGEyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX760_CR0,0,760,428_.jpg'} alt="Image Not Found" height={'170px'} width={'100%'} />
                                                                                    <div className={classes.iconDiv}>
                                                                                        <img src={videoIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                                                        <p className={classes.iconTxt}>
                                                                                            {'2:10'}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            <div className={classes.dividerBottom} />
                                                        </div>
                                                    )
                                                })
                                                :
                                                <></>
                                        }
                                    </>
                                </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        </>
    )
}
