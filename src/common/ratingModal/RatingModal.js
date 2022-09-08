import React from 'react';
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
    rating,
    setRating,
}) {
    const classes = useStyles()

    const handleClose = () => {
        setOpenRatingModal(false);
    };

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
                        <p className={classes.subHeading}>Where the Crawdads Sing</p>
                        <ModalRating rating={rating} setRating={setRating} />
                        <Button
                            variant='outlined'
                            className={classes.btn}
                        >
                            Rate
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
