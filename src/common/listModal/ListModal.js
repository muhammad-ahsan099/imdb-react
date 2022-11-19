import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './ListModalStyle';
import { Button, IconButton } from '@material-ui/core';
import { ModalRating } from '../rating/Rating';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';

export default function ListModal({
    openListModal,
    setOpenListModal,
    movie_title,
    poster,
}) {
    const classes = useStyles()

    const handleClose = () => {
        setOpenListModal(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openListModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openListModal}>
                    <div className={classes.paper}>
                        <div className={classes.header}>
                            <img src={poster} alt='Poster' className={classes.img} />
                            <div className={classes.movieNameDiv}>
                                <p className={classes.movieName}>{movie_title ? movie_title : 'Movie Name'}</p>
                                <h2 className={classes.listTitle} >Add to list</h2>
                            </div>
                        </div>

                        <Link to='/user-watchlist' className={classes.link}>
                            <div className={classes.listDiv}>
                                <p className={classes.listName}>View Watchlist</p>
                                <ArrowForwardIosRoundedIcon className={classes.arrow} />
                            </div>
                        </Link>
                        <div className={classes.divider} />
                        <div className={classes.listDiv}>
                            <p className={classes.listName}>Create new list</p>
                            <ArrowForwardIosRoundedIcon className={classes.arrow} />
                        </div>
                        <div className={classes.divider} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
