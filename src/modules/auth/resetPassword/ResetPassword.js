import { Paper, Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./ResetPasswordStyle";
import { Link } from 'react-router-dom';
import { BsInfo } from "react-icons/bs";
import UseResetPassword from './UseResetPassword';

export default function ResetPassword() {
    const Styles = useStyles();
    const [{ loading, password, password2, setPassword, setPassword2, resetHandler, server_error }] = UseResetPassword()
    return (
        <>
            <div className={Styles.container}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>

                        <Paper component={Box} className={Styles.cardDiv}>
                            <p className={Styles.heading}>Create new password</p>
                            <p className={Styles.innerHead}>We'll ask for this password whenever you Sign-In.</p>

                            <form action="">
                                <label className={Styles.labelTxt}>New Password</label> <br />
                                <input
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={server_error?.password ? Styles.errorField : Styles.inputsFields}
                                />
                                <div className={Styles.errorContainer}>
                                    {server_error?.password && <><BsInfo color='rgb(211,0,0)' /><span className={Styles.error}>{'Enter your password'}</span></>}
                                </div>
                                <div className={Styles.passwordLabelDiv}>
                                    <label className={Styles.labelTxt}>Re-enter Password</label>
                                </div>
                                <input
                                    type={'password'}
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className={server_error?.password2 ? Styles.errorField : Styles.inputsFields}
                                />
                                <div className={Styles.errorContainer}>
                                    {server_error?.password && <> <BsInfo color='rgb(211,0,0)' /><span className={Styles.error}>{'Type your password again'}</span></>}
                                </div>
                                <div className={Styles.btnDiv}>
                                    <Button
                                        disableElevation
                                        variant='contained'
                                        className={Styles.btnSignIn}
                                        onClick={() => resetHandler()}
                                    >
                                        Save changes and Sign-In
                                    </Button>
                                </div>
                            </form>
                        </Paper>

                        <div className={Styles.bottomContainer}>
                            <h4 className={Styles.bottomHead}>Secure password tips:</h4>
                            <div className={Styles.dotsContainer}>
                                <div className={Styles.dot} />
                                <p className={Styles.list} >Use at least 8 characters, a combination of numbers and letters is best.</p>
                            </div>
                            <div className={Styles.dotsContainer}>
                                <div className={Styles.dot} />
                                <p className={Styles.list} >Do not use the same password you have used with us previously.</p>
                            </div>
                            <div className={Styles.dotsContainer}>
                                <div className={Styles.dot} />
                                <p className={Styles.list} >Do not use dictionary words, your name, email address, or other personal information that can be easily obtained.</p>
                            </div>
                            <div className={Styles.dotsContainer}>
                                <div className={Styles.dot} />
                                <p className={Styles.list} >Do not use the same password for multiple online accounts.</p>
                            </div>
                        </div>

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
