import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './ReviewStyle';
import { IconButton } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Ratings from '../../../common/rating/Rating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
export default function Review(props) {

    const { drawerOpen, setDrawerOpen } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState('no');
    const [focusInput, setFocusInput] = useState(false)
    const [focusArea, setFocusArea] = useState(false)
    const [rating, setRating] = useState(0)
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open)

    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
        >
            <div className={classes.imgMobBG} >
                <div />
                <IconButton
                    onClick={toggleDrawer(false)}
                    color="primary"
                >
                    <CloseIcon style={{ color: '#fff' }} />
                </IconButton>
            </div>

            <div className={classes.header}>
                <div className={classes.img} />
                <h2 className={classes.heading} >Top Gun</h2>
            </div>
            <div className={classes.divider} />
            <div className={classes.bottom}>
                <p className={classes.ratingText}>YOUR RATING</p>

                <Ratings
                    rating={rating}
                    setRating={setRating}
                />
                {
                    rating !== 0 &&
                    <div className={classes.checkDiv}>
                        <CheckCircleIcon fontSize='small' className={classes.checkIcon} />
                        <span className={classes.checkText}>You rated this {rating}/10</span>
                    </div>
                }

                <p className={classes.ratingText}>YOUR REVIEW</p>

                <input
                    type={'text'}
                    className={classes.input}
                    placeholder={'write a headline for your review here'}
                    style={{ outline: focusInput ? '2.5px solid #adfeff' : 'none' }}
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => setFocusInput(false)}
                />
                <div className={classes.checkDiv}>
                    <ErrorIcon fontSize='small' color='error' />
                    <span className={classes.validateText}>A required field is missing.</span>
                </div>
                <textarea
                    rows="8"
                    cols="15"
                    name="description"
                    placeholder='write your review here'
                    style={{ outline: focusArea ? '2.5px solid #adfeff' : 'none' }}
                    className={classes.textArea}
                    onFocus={() => setFocusArea(true)}
                    onBlur={() => setFocusArea(false)}
                >
                </textarea>
                <div className={classes.checkDiv}>
                    <ErrorIcon fontSize='small' color='error' />
                    <span className={classes.validateText}>A required field is missing.</span>
                </div>

                <div className={classes.radioContainer}>

                    <FormLabel component="legend" className={classes.label}>Does this review contain <br /> spoilers?</FormLabel>
                    <RadioGroup value={value} onChange={handleChange} className={classes.radios}>
                        <FormControlLabel value="Yes" control={<Radio size='small' color='primary' />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio size='small' color='primary' />} label="No" />
                    </RadioGroup>
                </div>
                <div className={classes.checkDiv}>
                    <ErrorIcon fontSize='small' color='error' />
                    <span className={classes.validateText}>A required field is missing.</span>
                </div>


                <Button
                    variant='outlined'
                    className={classes.submitBtn}
                >
                    Submit
                </Button>

            </div>
            <div className={classes.bottomDiv} />
        </div>

    );

    return (
        <div>
            <React.Fragment>
                <Drawer anchor={'right'} open={drawerOpen} onClose={toggleDrawer(false)}>
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
