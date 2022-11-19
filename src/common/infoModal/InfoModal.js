import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './InfoModalStyle';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import BookMarkButton from '../BookMarkButton/BookMarkButton';

export default function InfoModal({
    openInfoModal,
    setOpenInfoModal,
    movie_data
}) {
    const classes = useStyles()
    const handleClose = () => {
        setOpenInfoModal(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openInfoModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openInfoModal}>
                    <div className={classes.paper}>
                        <div className={classes.header}>
                            <img src={movie_data?.poster_url} alt='Poster' className={classes.img} />
                            <div className={classes.movieNameDiv}>
                                <h3 className={classes.listTitle} >{movie_data?.title ? movie_data?.title : 'Movie Name'}</h3>
                                <p className={classes.movieName}>{movie_data?.year}</p>
                                {
                                    movie_data?.genre?.map((item, ind) => {
                                        return (
                                            <span className={classes.movieName}>{item}{" "} . {" "}</span>
                                        )
                                    }
                                    )
                                }
                                <div className={classes.ratingDiv}>
                                    <StarRoundedIcon fontSize='small' className={classes.fillIcon} />
                                    <div className={classes.ratingsDiv} >
                                        <span className={classes.rating}>{movie_data?.imdb_rating}</span><span className={classes.totalRating}>/10</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.headerMini}>
                            <p className={classes.detail}>{movie_data?.description}</p>
                        </div>
                        
                        <div className={classes.wishlistbtn}>
                        <BookMarkButton
                            movie_id={movie_data?.id}
                            small_primary_btn={true}
                            btn_text={'Watchlist'}
                        />
                        </div>

                        {/* <div className={classes.divider} />
                        <div className={classes.listDiv}>
                            <p className={classes.listName}>Create new list</p>
                            <ArrowForwardIosRoundedIcon className={classes.arrow} />
                        </div>
                        <div className={classes.divider} /> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
