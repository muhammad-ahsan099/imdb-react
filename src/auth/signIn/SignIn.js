import { Paper, Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./SignInStyle";

export default function SignIn() {
    const Styles = useStyles();
    return (
        <>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>

                        <Paper component={Box} className={Styles.cardDiv}>
                            <p className={Styles.heading}>Sign In</p>

                            <form action="">
                                <label className={Styles.labelTxt}>Email</label> <br />
                                <input type={'email'} className={Styles.inputsFields} />

                                <div className={Styles.passwordLabelDiv}>
                                    <label className={Styles.labelTxt}>Password</label>
                                    <label className={Styles.forgotlabel}>Forgot your Password?</label>
                                </div>
                                <input type={'password'} className={Styles.inputsFields} />

                                <div className={Styles.btnDiv}>
                                    <Button variant='contained' className={Styles.btnSignIn}>Sign In</Button>
                                </div>
                            </form>

                            <p className={Styles.desTxt}>
                                <input type={'checkbox'} />
                                Keep me Signed in. <span className={Styles.detailsTxt}>Details</span>
                            </p>

                            {/* New to Imdb  Container */}
                            <div className={Styles.orContainer}>
                                <div className={Styles.leftLine}></div>
                                <div>
                                    <span className={Styles.newToTxt}>New to Imdb?</span>
                                </div>
                                <div className={Styles.rightLine}></div>
                            </div>

                            {/* create your IMDb account Button */}
                            <div className={Styles.btnDiv}>
                                <Button variant='contained' className={Styles.btnCreateAccount}>Create your IMDb account</Button>
                            </div>
                        </Paper>

                        {/* last Container */}
                        <div className={Styles.lastContainer}>
                            <p>
                                <span className={Styles.lastContainerTxt}>Help</span>
                                <span className={Styles.lastContainerTxt}>Conditions of Use</span>
                                <span className={Styles.lastContainerTxt}>Privacy Notice</span>
                            </p>
                            <p className={Styles.lastContainerDes}>
                                &copy;1996-2022,Amazon.com, Inc. or its affiliates
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
