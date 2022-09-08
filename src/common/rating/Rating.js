import React, { useState } from 'react'
import Rating from 'react-rating'
import StarFill from '@material-ui/icons/Star';
import StarUnfill from '@material-ui/icons/StarBorderOutlined';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { useStyles } from './RatingStyle';

export default function Ratings({ rating, setRating }) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.innerContainer}>
                <Rating
                    stop={10}
                    initialRating={rating}
                    onClick={(val) => setRating(val)}
                    fullSymbol={<StarFill className={classes.fillIcon} />}
                    emptySymbol={<StarUnfill className={classes.unfillIcon} />}
                />
                <span className={classes.spanText}>{rating}</span>
            </div>
        </div>
    )
}


export const ModalRating = ({rating, setRating}) => {
    const classes = useStyles()

    return (
        <div className={classes.modalContainer}>
            <Rating
                stop={10}
                initialRating={rating}
                onClick={(val) => setRating(val)}
                fullSymbol={<StarRoundedIcon className={classes.fillIconModal} />}
                emptySymbol={<StarOutlineRoundedIcon className={classes.unfillIconModal} />}
            />
        </div>
    )
}
