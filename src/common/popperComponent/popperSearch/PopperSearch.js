import React from 'react';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { ClickAwayListener, ListItemIcon, MenuItem, MenuList } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import { useStyles } from './PopperSearchStyle'


export default function PopperSearch(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const classes = useStyles();

    const handleMenuItemClick = (event , index) => {
        setSelectedIndex(index);
        setOpen(false);    
    };
    const handleToggle = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        setOpen(false);
    };
    const options = ['All', 'Titles', 'TVEpisodes', 'Celebs', 'Companies', 'Keywords',];
    return (
        <div className={classes.root} >
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition disablePortal className={classes.Popper}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" className={classes.menuList}>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={index}
                                            className={classes.typography}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            <ListItemIcon className={classes.iconsList}>
                                                <SearchIcon fontSize="small" style={{ color: 'yellow' }} />
                                            </ListItemIcon>
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
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={(event) => handleToggle(event)}
                className={classes.listBtn}
            >
                {options[selectedIndex]}
                {
                    open ?
                        <ArrowDropUpRoundedIcon />
                        :
                        <ArrowDropDownRoundedIcon />
                }
            </Button>
        </div>
    );
}
