import { Box, Paper, Button, Container, Grid } from '@material-ui/core';
import React from 'react'
import { useStyles } from "./CreateAccountStyle";
import { BsInfo } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { VscWarning } from "react-icons/vsc";

import UseCreateAccount from './UseCreateAccount';


export default function CreateAccount() {
    const Styles = useStyles();
    const [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, userName, setUserName, signupHandler, server_error }] = UseCreateAccount()
    return (
        <>
            <div className={Styles.container}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <div className={Styles.imgContainer}>
                            <img src={require('../../../assets/images/imdbLogo.png')} alt="Image Not Found" className={Styles.img} />
                        </div>
                        {
                            Object.keys(server_error).length !== 0 &&
                            <div className={Styles.errorContainer}>
                                <VscWarning className={Styles.errIcon} />
                                <div className={Styles.rightDiv}>
                                    <span className={Styles.errHead}>There was a problem</span>
                                    <div className={Styles.marginDiv} />
                                    {server_error?.name && <li className={Styles.error}>{'Enter your name'}</li>}
                                    {server_error?.email && <li className={Styles.error}> {'Enter your email'}</li>}
                                    {(server_error?.password || server_error?.password2) && <li className={Styles.error}>{'Enter your password'}</li>}
                                    {server_error?.non_field_errors && <li className={Styles.error}>{'Password must match'}</li>}
                                </div>
                            </div>
                        }

                        <Paper component={Box} className={Styles.cardDiv}>
                            <p className={Styles.heading}>Create Account</p>

                            <form action="">
                                <label className={Styles.labelTxt}>Your Name</label> <br />
                                <input
                                    type={'text'}
                                    placeholder='First and Last name'
                                    className={Styles.inputsFields}
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />

                                <label className={Styles.labelTxt}>Email</label> <br />
                                <input
                                    type={'email'}
                                    className={Styles.inputsFields}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className={Styles.labelTxt}>Password</label> <br />
                                <input
                                    type={'password'}
                                    placeholder='at least 8 characters'
                                    className={Styles.passwordField}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                />
                                <div className={Styles.infoDiv}>
                                    <BsInfo color='rgb(56,119,194)' size='20px' />
                                    <span className={Styles.passwordTxt}>Password must be at least 8 characters.</span> <br /> <br />
                                </div>

                                <label className={Styles.labelTxt}>Re-enter password</label> <br />
                                <input
                                    type={'password'}
                                    className={Styles.inputsFields}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                />


                                <div className={Styles.btnDiv}>
                                    <Button variant='outlined'
                                        className={Styles.btnCreateAccount}
                                        onClick={() => signupHandler()}
                                    >
                                        {
                                            loading ?
                                                'loading...'
                                                :
                                                'Create your IMDb account'
                                        }
                                    </Button>
                                </div>
                            </form>

                            <p className={Styles.desTxt}>
                                Already have an account?<Link to='/login' className={Styles.link}><span className={Styles.signInTxt} >{' '}Sign in</span></Link>
                            </p>
                        </Paper>

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