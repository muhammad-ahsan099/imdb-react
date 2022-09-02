import React from 'react';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { ClickAwayListener, IconButton, ListItemIcon, MenuItem, MenuList } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { IMDB_PRO_POSTER } from '../../../constants/images'
import PRO_LOGO from '../../../assets/icons/pro-logo.svg'

import { useStyles } from './PopperImdbProStyle'


export default function PoopperIMDBPro(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleMenuItemClick = () => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => !prev);
    };
    const handleClose = (event) => {
        setOpen(false);
    };

    return (
        <div className={classes.root} >
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-end'} transition disablePortal>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div className={classes.menuList}>
                                    <div className={classes.containerInner}>
                                        <img src={IMDB_PRO_POSTER} width={127} height={145} alt='poster' />
                                        <div >
                                            <h5 className={classes.h5}> The essential resource for entertainment professionals</h5>
                                            <ul className={classes.ul}>
                                                <li className={classes.li}>Find industry contacts & talent representation</li>
                                                <li className={classes.li}>Access in-development titles not available on IMDb</li>
                                                <li className={classes.li}>Get the latest news from leading industry trades</li>
                                                <li className={classes.li}>Claim your page and control your brand across IMDb & Amazon</li>
                                            </ul>
                                        <Button
                                                variant='contained'
                                                className={classes.freebutton}
                                            >
                                                Try IMDbPro Free
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </ClickAwayListener>

                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Button
                onClick={handleMenuItemClick('bottom-end')}
                variant='outlined'
                className={classes.proButton}
            >
                <img src={PRO_LOGO} alt="imagelogo" />
            </Button>

        </div>
    );
}
