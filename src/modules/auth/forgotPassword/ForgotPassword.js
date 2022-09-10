import { Paper, Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./ForgotPasswordStyle";
import { Link } from 'react-router-dom';
import { VscWarning } from "react-icons/vsc";
import UseForgotPassword from './UseForgotPassword';
// import UseResetPassword from '.';

export default function ForgotPassword() {
    const Styles = useStyles();
    const [{ loading, email, setEmail, forgotPasswordHandler, server_error }] = UseForgotPassword()
    return (
        <>
            <div className={Styles.container}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>

                        {/* {
                            Object.keys(server_error).length !== 0 &&
                            <div className={Styles.errorContainer}>
                                <VscWarning className={Styles.errIcon} />
                                <div className={Styles.rightDiv}>
                                    <span className={Styles.errHead}>There was a problem</span>
                                    <div className={Styles.marginDiv} />
                                    {server_error?.email && <li className={Styles.error}> {'Enter your email'}</li>}
                                </div>
                            </div>
                        } */}


                        <Paper component={Box} className={Styles.cardDiv}>
                            {

                                false ?
                                    <>
                                        <p className={Styles.heading}>Check your email</p>
                                        <p className={Styles.innerHead}>You will receive an email from us with instructions for resetting your password. If you don't receive this email, please check your junk mail folder or visit our Help pages to contact <a style={{ color: '#136cb2' }} href={'https://help.imdb.com/imdb?registration/'}>Customer Service</a> for further assistance.</p>
                                    </>

                                    :
                                    <>
                                        <p className={Styles.heading}>Password assistance</p>
                                        <p className={Styles.innerHead}>Enter the email address associated with your IMDb account, then click Continue.</p>
                                        <form action="">
                                            <label className={Styles.labelTxt}>Email</label> <br />
                                            <input
                                                type={'email'}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={server_error?.email ? Styles.errorField : Styles.inputsFields}
                                            />

                                            <div className={Styles.btnDiv}>
                                                <Button
                                                    disableElevation
                                                    variant='contained'
                                                    className={Styles.btnSignIn}
                                                    onClick={() => forgotPasswordHandler()}
                                                >
                                                    Continue
                                                </Button>
                                            </div>
                                        </form>
                                    </>
                            }
                        </Paper>

                        <div className={Styles.bottomContainer}>
                            <h4 className={Styles.bottomHead}>Has your email address changed?</h4>
                            <p className={Styles.list} >Please visit our <a style={{ color: '#136cb2' }} href='https://help.imdb.com/imdb?registration/'>Registration Help page</a> for account recovery assistance</p>
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
