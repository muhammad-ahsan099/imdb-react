import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './RatingModalStyle';
import { Button, IconButton } from '@material-ui/core';
import { ModalRating } from '../rating/Rating';
import CloseIcon from '@material-ui/icons/Close';

export default function RatingModal({
    openRatingModal,
    setOpenRatingModal,
    savedRating,
    setSavedRating,
    rating,
    setRating,
    movie_title,
    Rating,
    RemoveRating,
    UpdateRating,
}) {
    const classes = useStyles()

    const handleClose = () => {
        setTimeout(() =>
            setRating(savedRating)
            , 500)
        setOpenRatingModal(false);
    };

    useEffect(() => {
        if (savedRating === 'Rate') {
            setRating(0)
        }
    }, [])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRatingModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openRatingModal}>
                    <div className={classes.paper}>
                        <div className={classes.starBg}>
                            <span className={classes.ratingNo}>{rating}</span>
                        </div>
                        <p className={classes.rateText}>RATE THIS</p>
                        <p className={classes.subHeading}>{movie_title ? movie_title : 'Where the Crawdads Sing'}</p>
                        <ModalRating rating={rating} setRating={setRating} />
                        <Button
                            variant='outlined'
                            className={classes.btn}
                            onClick={() => savedRating !== 'Rate' ? UpdateRating() : Rating()}
                        >
                            Rate
                        </Button>
                        {
                            savedRating !== 'Rate' &&

                            <Button
                                variant='outlined'
                                color='primary'
                                className={classes.remBtn}
                                onClick={() => RemoveRating()}
                            >
                                Remove Rating
                            </Button>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
