import { Paper, Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./SignInStyle";
import { Link } from 'react-router-dom';
import UseSignIn from './UseSignIn';
import { BsInfo } from "react-icons/bs";

export default function SignIn() {
    const Styles = useStyles();
    const [{ loading, email, password, setEmail, setPassword, doLoginUser, server_error }] = UseSignIn()
    return (
        <>
            <div className={Styles.container}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>

                        <Paper component={Box} className={Styles.cardDiv}>
                            <p className={Styles.heading}>Sign In</p>

                            <form action="">
                                <label className={Styles.labelTxt}>Email</label> <br />
                                <input
                                    type={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={server_error?.email ? Styles.errorField : Styles.inputsFields}
                                />
                                <div className={Styles.errorContainer}>
                                    {server_error?.email && <><BsInfo color='rgb(211,0,0)' /><span className={Styles.error}>{'Enter your email'}</span></>}
                                </div>
                                <div className={Styles.passwordLabelDiv}>
                                    <label className={Styles.labelTxt}>Password</label>
                                    <Link to='/forgot-password' className={Styles.link}>
                                        <label className={Styles.forgotlabel}>Forgot your Password?</label>
                                    </Link>
                                </div>
                                <input
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={server_error?.password ? Styles.errorField : Styles.inputsFields}
                                />
                                <div className={Styles.errorContainer}>
                                    {server_error?.password && <> <BsInfo color='rgb(211,0,0)' /><span className={Styles.error}>{'Enter your password'}</span></>}
                                </div>
                                <div className={Styles.btnDiv}>
                                    <Button
                                        disableElevation
                                        variant='contained'
                                        className={Styles.btnSignIn}
                                        onClick={() => doLoginUser()}
                                    >
                                        {
                                            loading ?
                                                'loading...'
                                                :
                                                'Sign In'
                                        }
                                    </Button>
                                </div>
                            </form>

                            <label className={Styles.desTxt} for='checkbox'>
                                <input type={'checkbox'} id="checkbox" name="checkbox" />
                                Keep me Signed in.
                            </label>

                            {/* New to Imdb  Container */}
                            <div className={Styles.orContainer}>
                                <div className={Styles.leftLine}></div>
                                <div>
                                    <span className={Styles.newToTxt}>New to Imdb?</span>
                                </div>
                                <div className={Styles.rightLine}></div>
                            </div>

                            {/* create your IMDb account Button */}
                            <Link to='/create-account' className={Styles.link}>
                                <div className={Styles.btnDiv}>
                                    <Button disableElevation variant='contained' className={Styles.btnCreateAccount}>Create your IMDb account</Button>
                                </div>
                            </Link>
                        </Paper>

                        {/* last Container */}
                        <div className={Styles.lastContainer}>
                            <p>
                                <a className={Styles.link} href='https://help.imdb.com/article/imdb/general-information/why-should-i-register-on-imdb/GHB62T7USTMYMCDC?ref_=cons_ap_ftr_help#' target={'_blank'}>
                                    <span className={Styles.lastContainerTxt}>Help</span>
                                </a>
                                <a className={Styles.link} href='https://www.imdb.com/conditions' target='_blank'>
                                    <span className={Styles.lastContainerTxt}>Conditions of Use</span>
                                </a>
                                <a className={Styles.link} href='https://www.imdb.com/privacy' target='_blank'>
                                    <span className={Styles.lastContainerTxt}>Privacy Notice</span>
                                </a>
                            </p>
                            <p className={Styles.lastContainerDes}>
                                &copy;1996-2022,Amazon.com, Inc. or its affiliates
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
