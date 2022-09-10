import React from 'react'
import { Box, Button, Container, Grid, Paper } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStyles } from "./SignInGoogleStyle";
import { Link } from 'react-router-dom';

export default function SignInGoogle() {
    const Styles = useStyles()
    return (
        <>
            <Container>
                <Paper component={Box}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} className={Styles.containerMargin}>

                            {/* ist content */}
                            <div className={Styles.istContentDiv}>
                                <h2>Sign In</h2>
                                <div>
                                    <Link to='/login' className={Styles.Link}>
                                        <Button
                                            variant="outlined"
                                            size="medium"
                                            className={Styles.signInButton}
                                            startIcon={<img src={require('../../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.signInButtonHW} />}
                                        >
                                            <span className={Styles.imdbIcon}>
                                                Sign In With IMDb
                                            </span>
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        className={Styles.signInButton}
                                        startIcon={<img src={require('../../../assets/images/googleLogo.png')} alt="Image Not Found" className={Styles.signInButtonHW} />}
                                    >
                                        <span className={Styles.googleIcon}>
                                            {' '}{'Sign In With Google'}
                                        </span>
                                    </Button>
                                </div>

                                {/* options */}
                                <div className={Styles.optionDiv}>
                                    <div>
                                        <p>
                                            Show more options
                                        </p>
                                    </div>
                                    <div className={Styles.optionIcon}>
                                        <KeyboardArrowDownIcon />
                                    </div>
                                </div>

                                {/* OR Container */}
                                <div className={Styles.orContainer}>
                                    <div className={Styles.leftLine}></div>
                                    <div>
                                        <b><em>or</em></b>
                                    </div>
                                    <div className={Styles.rightLine}></div>
                                </div>

                                {/* button */}
                                <Link to='/create-account' className={Styles.Link}>
                                    <Button variant="contained" size="medium" className={Styles.createAccountBtn}>
                                        Create a New Account
                                    </Button>
                                </Link>

                                {/* description */}
                                <div className={Styles.istDesDiv}>
                                    <p>
                                        By Signing in, you agree to IMDb's <span className={Styles.istDesDivTxt}>
                                            <a className={Styles.Link} href='https://www.imdb.com/conditions' target='_blank'>
                                                <span className={Styles.istDesDivTxt}>

                                                    Conditions to Use
                                                </span>
                                            </a>

                                        </span> and
                                        <a className={Styles.Link} href='https://www.imdb.com/privacy' target='_blank'>
                                            <span className={Styles.istDesDivTxt}>
                                                Privacy Policy.
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6} className={Styles.containerMargin}>
                            {/* 2nd content */}
                            <div className={Styles.secondContentDiv}>
                                <div className={Styles.secondContentBox}>
                                    <div>
                                        <h2>Benefits of your free IMDb account</h2>
                                    </div>

                                    {/* content */}
                                    <div className={Styles.BoxContentDiv}>
                                        <span className={Styles.boxHeading}>
                                            Personalized Recommendations
                                        </span>
                                        <br />
                                        <span className={Styles.boxDes}>
                                            Discover shows you'll love.
                                        </span>
                                    </div>

                                    <div className={Styles.BoxContentDiv}>
                                        <span className={Styles.boxHeading}>
                                            Your Watchlist
                                        </span>
                                        <br />
                                        <span className={Styles.boxDes}>
                                            Track everything you want to watch and receive e-mail when movies open in theaters.
                                        </span>
                                    </div>

                                    <div className={Styles.BoxContentDiv}>
                                        <span className={Styles.boxHeading}>
                                            Your Ratings
                                        </span>
                                        <br />
                                        <span className={Styles.boxDes}>
                                            Rate and remember everything you've seen.
                                        </span>
                                    </div>

                                    <div className={Styles.BoxContentDiv}>
                                        <span className={Styles.boxHeading}>
                                            Contribute to IMDb
                                        </span>
                                        <br />
                                        <span className={Styles.boxDes}>
                                            Add data that will be seen by millions of people and get cool badges.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>


            <Container>
                <Grid>
                    <Grid>
                        <Paper className={Styles.historyDiv}>
                            <div className={Styles.historyTitle}>
                                <h3>Recently Viewed</h3>
                            </div>

                            <div className={Styles.historyTitle}>
                                <p className={Styles.clearTxt}>
                                    Clear your history
                                </p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
