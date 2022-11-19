
import React, { useState } from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useStyles } from './BookMarkButtonStyle'
import { getToken } from '../localStorage/LocalStorage';
import axios from 'axios';
import { endPoint } from '../../redux/endPoint/EndPoint';
import { ClapSpinner } from 'react-spinners-kit';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddOutlined';
import clsx from 'clsx'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import { useNavigate } from 'react-router-dom';



export default function BookMarkButton({ movie_id, small_primary_btn, bgColor, end_icon, btn_text }) {
    const classes = useStyles()
    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const userProfile = useSelector(state => state.AuthReducer.userProfile)
    const [check, setCheck] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (isUserLoggedIn) {
            if (userProfile?.user_wishlist?.to_watch?.length >= 0) {
                const filterUserWishlist = userProfile?.user_wishlist?.to_watch?.filter(item => item?.id === movie_id)
                if (filterUserWishlist.length === 1) {
                    setCheck(true)
                }
            }
        }
    }, [userProfile])

    const AddToWishlist = async (e) => {
        e.preventDefault();
        if (isUserLoggedIn) {
            try {
                const { access_token } = getToken();
                setLoading(true);

                const creds = {
                    to_watch: movie_id
                }
                let request = {
                    method: 'post',
                    url: `${endPoint}user/user-wishlist/`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${access_token}`,
                    },
                    data: creds
                };
                let res = await axios(request);
                if (res.data.success) {
                    setTimeout(() =>
                        setCheck(!check)
                        , 550)
                }
                console.log('Result of Wishlist:', res.data);
            }

            catch (error) {
                console.log('Error at Add to Wishlist: ', error);
            }
            finally {
                setTimeout(() =>
                    setLoading(false)
                    , 500)
            }
        } else {
            navigate('/login')
        }
    }



    return (
        <div className={classes.BtnContainer} onClick={(e) => AddToWishlist(e)} style={{ width: small_primary_btn ? '100%' : 'auto' }}>
            {
                small_primary_btn
                    ?
                    <>
                        <Button
                            variant='outlined'
                            className={clsx(classes.menuButton, bgColor && classes.bgButton)}
                            startIcon={
                                !end_icon ?
                                    check ?
                                        loading ?
                                            <div className={classes.loader}>
                                                <ClapSpinner size={15} frontColor='#676cf9' />
                                            </div>
                                            :
                                            <DoneIcon />
                                        :
                                        loading ?
                                            <div className={classes.loader}>
                                                <ClapSpinner size={15} frontColor='#676cf9' />
                                            </div>
                                            :
                                            <AddIcon />
                                    :
                                    <></>}
                            endIcon={end_icon && <OpenInNewOutlinedIcon />}
                        // onClick={(e) => AddToWishlist(e)}
                        >
                            {btn_text ? btn_text : 'Watchlist'}
                        </Button>
                    </>
                    :
                    <>
                        {
                            check ?
                                <div className={classes.iconActiveContainer}>
                                    {
                                        loading ?
                                            <div className={classes.loader}>
                                                <ClapSpinner size={15} frontColor='#000000' />
                                            </div>
                                            :
                                            <DoneIcon className={classes.activeWishListIcon} />
                                    }

                                </div>
                                :
                                <div className={classes.iconContainer}>
                                    {
                                        loading ?
                                            <div className={classes.loader}>
                                                <ClapSpinner size={15} frontColor='#ffffff' />
                                            </div>
                                            :
                                            <AddOutlinedIcon className={classes.wishListIcon} />
                                    }
                                </div>
                        }
                    </>
                    
            }

        </div>
    )
}
