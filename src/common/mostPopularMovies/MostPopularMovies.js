import { Box, Container, Grid, IconButton, Paper, } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./MostPopularMoviesStyle";
import ShareIcon from '@material-ui/icons/Share';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import bookIcon from "../../assets/images/bookIcon.svg";

export default function MostPopularMovies() {
    const Styles = useStyles();

    return (
        <Container>
            <Grid container justifyContent={'center'}>
                {/* ist content */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Paper component={Box} className={Styles.istContainer}>
                        <div className={Styles.istContentDiv}>
                            {/* Headings */}
                            <div className={Styles.headingDiv}>
                                <div>
                                    <span className={Styles.istHeading}>IMDb Charts</span> <br />
                                    <span className={Styles.secondHeading}>Most Popular Movies</span> <br />
                                    <span className={Styles.secondHeadingDes}>As determined by IMDb Users</span>
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
                                <div>
                                    <span className={Styles.cardSecondHeading}>IMDb Rating</span>
                                    <span className={Styles.cardSecondHeading}>Your Rating</span>
                                </div>
                            </div>

                            {/* cards */}
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => {
                                    return (
                                        <>
                                            <div className={Styles.cardMainContainer}>
                                                <div className={Styles.cardHeaderDiv}>
                                                    <div>
                                                        <img src={require('../../assets/images/watchCard1.jpg')} alt="Image not found" height={'70px'} width={'50px'} />
                                                    </div>
                                                    <div className={Styles.cardTitleDiv}>
                                                        <span className={Styles.cardTitle}>Nope <span>(2022)</span></span>
                                                        <br />
                                                        <span className={Styles.cardTitleTwo}>1 (* 1)</span>
                                                    </div>
                                                </div>
                                                <div className={Styles.cardHeaderDiv}>
                                                    <div>
                                                        <span className={Styles.cardRatingTitle}>7.0</span>
                                                    </div>
                                                    <div>
                                                        <img src={bookIcon} alt="Icon Not Found" height={'50px'} width={'50px'} className={Styles.cardRatingTitle} />
                                                    </div>
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
                        <h2>You have seen</h2>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
