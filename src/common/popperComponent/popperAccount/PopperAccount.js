import React from 'react';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { ClickAwayListener, IconButton, ListItemIcon, MenuItem, MenuList } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useStyles } from './PopperAccountStyle'


export default function PopperAccount(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleMenuItemClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const handleClose = (event) => {
        setOpen(false);
    };
    const options = ['Your activity', 'Your watchlist', 'Your ratings', 'Your lists', 'Account settings', 'Sign out']
    return (
        <div className={classes.root} onMouseLeave={()=> handleClose()}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition disablePortal>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" className={classes.menuList}>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={index}
                                            className={classes.typography}
                                        // selected={index === selectedIndex}
                                        // onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {/* <ListItemIcon>
                                                <SearchIcon fontSize="small" style={{ color: 'yellow' }} />
                                            </ListItemIcon> */}
                                            {option}

                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>

                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Button
                onClick={handleMenuItemClick('bottom-end')}
                className={classes.listBtn}
            >
                <AccountCircleRoundedIcon />
                <p className={classes.menuText}>
                    TA-
                </p>
                {
                    open ?
                        <ArrowDropUpRoundedIcon style={{ color: '#fff' }} />
                        :
                        <ArrowDropDownRoundedIcon style={{ color: '#fff' }} />
                }
            </Button>

            <IconButton
                // size={'large'}
                className={classes.smallBtnScreen}
                onClick={handleMenuItemClick('bottom-end')}
            >
                <AccountCircleRoundedIcon />
            </IconButton>

        </div>
    );
}
