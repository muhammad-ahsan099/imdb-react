import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarUnfillIcon from '@material-ui/icons/StarBorderOutlined';
import StarFillIcon from '@material-ui/icons/StarOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStyles } from './MovieCardStyle';
import { IconButton } from '@material-ui/core';
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import clsx from 'clsx'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import BookMarkButton from '../BookMarkButton/BookMarkButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InfoModal from '../infoModal/InfoModal';

export default function MovieCard({ info_btn, bgColor, btn_text, end_icon, moviesData }) {
    const classes = useStyles();
    const [openInfoModal, setOpenInfoModal] = useState(false)
    const userProfile = useSelector(state => state.AuthReducer.userProfile)
    let filterRating;
    if (userProfile?.user_rating?.length >= 0) {
        filterRating = userProfile?.user_rating?.find(item => item?.movie === moviesData?.id)
    }

    return (
        <Card className={clsx(classes.root, bgColor && classes.bgWhite)}>
            <CardActionArea>
                <div className={classes.iconTopContainer} >
                    <BookMarkButton movie_id={moviesData?.id} />
                </div>

                <Link to={`/movie-detail/${moviesData?.imdb_id}/${moviesData?.id}`} >
                    <CardMedia
                        component="img"
                        alt="Movie Poster"
                        height="274"
                        image={moviesData?.poster_url}
                        title="Movie Poster"
                    />
                </Link>

                <CardContent>
                    <div className={classes.topSection}>
                        <div className={classes.rating}>
                            <StarFillIcon fontSize='small' className={classes.fillIcon} />
                            <Typography className={classes.ratingText}>
                                {moviesData?.imdb_rating}
                            </Typography>
                        </div>
                        {
                            filterRating &&
                            <div className={classes.rating}>
                                <StarUnfillIcon fontSize='small' color='primary' />
                                <Typography className={classes.ratingText}>
                                    {filterRating?.ratings}
                                </Typography>
                            </div>
                        }
                    </div>
                    <Typography className={clsx(classes.Typography, bgColor && classes.colorBlack)} variant="h6" component="h6">
                        {moviesData?.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classes={{ root: classes.cardAction }}>
                {/* <Button
                    variant='outlined'
                    className={clsx(classes.menuButton, bgColor && classes.bgButton)}
                    startIcon={!end_icon && <AddIcon />}
                    endIcon={end_icon && <OpenInNewOutlinedIcon />}
                >
                    {btn_text ? btn_text : 'Watchlist'}
                </Button> */}
                <BookMarkButton
                    movie_id={moviesData?.id}
                    small_primary_btn={true}
                    bgColor={bgColor}
                    end_icon={end_icon}
                    btn_text={btn_text}
                />
                <div className={clsx(classes.bottomSection, info_btn && classes.hideInfoBtn)}>
                    <Link to={`/movie-trailer/${moviesData?.imdb_id}/${moviesData?.id}`} className={classes.Link}>
                        <Button
                            variant='outlined'
                            className={clsx(classes.trailerButton, bgColor && classes.bgTrailerButton)}
                            startIcon={<PlayArrowRoundedIcon />}

                        >
                            <p className={classes.menuText} style={{ color: bgColor && '#000' }}>
                                Trailer
                            </p>
                        </Button>
                    </Link>
                    {
                        info_btn &&
                        <IconButton
                            // size={'large'}
                            className={classes.smallMenuScreen}
                            onClick={() => setOpenInfoModal(true)}
                        >
                            <InfoOutlinedIcon />
                        </IconButton>
                    }
                    <InfoModal
                        openInfoModal={openInfoModal}
                        setOpenInfoModal={setOpenInfoModal}
                        movie_data={moviesData}
                    />
                </div>
            </CardActions>
        </Card>
    );
}
