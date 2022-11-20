import { Box, Container, Grid, IconButton, Paper, } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./WatchlistStyle";
import ShareIcon from '@material-ui/icons/Share';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import bookIcon from "../../assets/images/bookIcon.svg";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { UseWishlist } from './UseWatchlist';


export default function Watchlist() {
    const Styles = useStyles();
    const [{ userProfile }] = UseWishlist()

    return (
        <Container style={{ backgroundColor: 'rgb(214, 215,209' }}>
            <Grid container justifyContent={'center'}>
                {/* ist content */}
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Paper component={Box} className={Styles.istContainer}>
                        <div className={Styles.istContentDiv}>
                            {/* Headings */}
                            <div className={Styles.headingDiv}>
                                <div>
                                    <span className={Styles.secondHeading}>Your Watchlist</span> <br />
                                    <span className={Styles.secondHeadingDes}>Private</span>
                                </div>
                                <div>
                                    <IconButton>
                                        <ShareIcon />
                                    </IconButton>
                                    <br />
                                    <span className={Styles.buttonHeading}>Share</span>
                                </div>
                            </div>

                            {/* underline */}
                            <hr />

                            {/* main content */}
                            <div className={Styles.mainContainer}>
                                <div>
                                    <span className={Styles.labelHeading}>8 Titles</span>
                                </div>
                                <div>
                                    <label htmlFor="" className={Styles.labelHeading}>Sort by : </label>
                                    <select name="" id="">
                                        <option value="">Ranking</option>
                                        <option value="">IMDb Rating</option>
                                        <option value="">Release Date</option>
                                        <option value="">Number of Ratings</option>
                                        <option value="">Your Rating</option>
                                    </select>
                                    <IconButton size='small' className={Styles.ImportExportIcon}>
                                        <ImportExportIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <hr />

                            {/* cards */}
                            {
                                userProfile?.to_watch?.map((items, index) => {
                                    return (
                                        <>
                                            <div className={Styles.cardMainContainer}>

                                                <div className={Styles.poster} style={{ backgroundImage: `url("${items?.poster_url}")` }}>
                                                    <BsFillBookmarkPlusFill style={{ height: 30, width: 30, color: 'rgb(177,177,177)' }} />
                                                    {/* <BsFillBookmarkCheckFill style={{ height: 24, width: 28, color: 'rgb(154,221,128)' }} /> */}
                                                </div>

                                                <div className={Styles.rightContainer}>
                                                    <p className={Styles.head}>{items?.title ? items?.title : 'The Menu'}</p>
                                                    <span className={Styles.movieText}>{items?.year ? items?.year : '2022'}</span> <span className={Styles.movieText}>{'1h 46m '} </span>
                                                    {
                                                        items?.genre?.map((genreName) => {
                                                            return (
                                                                <span className={Styles.movieText} >
                                                                    {genreName ? genreName + ", " : 'Action'}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                    <div className={Styles.ratingContainer}>
                                                        <StarRoundedIcon className={Styles.iconStar} />
                                                        <span className={Styles.cardRatingTitle}>{items?.imdb_rating ? items?.imdb_rating : '7.0'}</span>
                                                        <StarRoundedIcon className={Styles.iconBlueStar} />
                                                        <span className={Styles.cardRatingTitle}>{'7.0'}</span>
                                                        <div className={Styles.metaScoreDiv}>
                                                            <div className={Styles.metascore}>
                                                                <span>{'50'}</span>
                                                            </div>
                                                            <span className={Styles.metascoreText}>Metascore</span>
                                                        </div>
                                                    </div>

                                                    <p className={Styles.detail}>{ items?.description ? items?.description : 'A young couple travel to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.'}</p>
                                                </div>



                                                {/* <div className={Styles.cardContainer}>
                                                    <BsFillBookmarkPlusFill style={{ height: 24, width: 28, color: 'rgb(177,177,177)' }} />
                                                    {/* <BsFillBookmarkCheckFill style={{ height: 24, width: 28, color: 'rgb(154,221,128)' }} /> 
                                                </div> */}
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Paper>
                </Grid>

                {/* second content */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper component={Box} className={Styles.secondContentDiv}>
                        <h2>You have seen</h2>
                        <p className={Styles.seenMovies}><span className={Styles.seenText}>2</span> / 250  &nbsp;&nbsp;(0%)</p>

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
