import { Box, Container, Grid, IconButton, Paper, } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./Top250MoviesStyle";
import ShareIcon from '@material-ui/icons/Share';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { UseTop250MoviesMovies } from './UseTop250MoviesMovies';


export default function Top250Movies() {
    const Styles = useStyles();
    const [
        {
            loading,
            top250Movies,
        }
    ] = UseTop250MoviesMovies()

    return (
        <Container>
            <Grid container justifyContent={'center'}>
                {/* ist content */}
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Paper component={Box} className={Styles.istContainer}>
                        <div className={Styles.istContentDiv}>
                            {/* Headings */}
                            <div className={Styles.headingDiv}>
                                <div>
                                    <span className={Styles.istHeading}>IMDb Charts</span> <br />
                                    <span className={Styles.secondHeading}>IMDb 250 Movies</span> <br />
                                    <span className={Styles.secondHeadingDes}>IMDb Top 250 as rated by regular IMDb voters.</span>
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
                                    <span className={Styles.labelHeading}>Showing 100 Titles</span>
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

                            {/* cards headings */}
                            <div className={Styles.cardsHeadingsDiv}>
                                <div>
                                    <span className={Styles.cardIstHeading}>Rank & Title</span>
                                </div>
                                <div className={Styles.cardContainer}>
                                    <span className={Styles.cardSecondHeading}>IMDbM <br /> Rating</span>
                                    <span className={Styles.cardSecondHeading}>Your<br /> Rating</span>
                                    <span className={Styles.cardSecondHeading}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </div>
                            </div>

                            {/* cards */}
                            {
                                top250Movies?.map((items, index) => {
                                    return (
                                        <>
                                            <div className={Styles.cardMainContainer}>
                                                <div className={Styles.cardHeaderDiv}>
                                                    <div>
                                                        <img src={items?.poster_url ? items?.poster_url : require('../../assets/images/watchCard1.jpg')} alt="not found" height={'70px'} width={'50px'} />
                                                    </div>
                                                    <div className={Styles.cardTitleDiv}>
                                                        <span className={Styles.cardTitle}>{items?.title ? items?.title : 'Nope'} <span style={{ color: 'rgb(142,142,141)' }}>{items?.year ? '(' + items?.year + ')' : '(2022)'}</span></span>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className={Styles.cardContainer}>
                                                    <div className={Styles.ratingContainer}>
                                                        <StarRoundedIcon className={Styles.iconStar} />
                                                        <span className={Styles.cardRatingTitle}>{items?.imdb_rating ? items?.imdb_rating : '7.0'}</span>
                                                    </div>
                                                    <div className={Styles.ratingContainer}>
                                                        <StarRoundedIcon className={Styles.iconBlueStar} />
                                                        <span className={Styles.cardRatingTitle}>{items?.imdb_rating ? items?.imdb_rating : '7.0'}</span>
                                                    </div>
                                                    <BsFillBookmarkPlusFill style={{ height: 24, width: 28, color: 'rgb(177,177,177)' }} />
                                                    {/* <BsFillBookmarkCheckFill style={{ height: 24, width: 28, color: 'rgb(154,221,128)' }} /> */}
                                                </div>
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
                        <img src={require('../../assets/images/popularCard2.jpg')} alt="Image Not Found" height={'300px'} width={'100%'} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
