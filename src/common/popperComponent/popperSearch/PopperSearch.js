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
import TvIcon from '@material-ui/icons/Tv';
import Movies from '@material-ui/icons/TheatersRounded';
import Celebs from '@material-ui/icons/PeopleRounded';
import BusinessIcon from '@material-ui/icons/Business';
import LabelIcon from '@material-ui/icons/Label';

const options = [
    {
        title : 'All',
        icon: <SearchIcon fontSize="small" style={{ color: 'yellow' }} />
    },
    {
        title : 'Titles',
        icon: <Movies fontSize="small" style={{ color: 'yellow' }} />
    },
    {
        title : `TVEpisode`,
        icon: <TvIcon  fontSize="small" style={{ color: 'yellow' }}/>
    },
    {
        title : 'Celebs',
        icon: <Celebs  fontSize="small" style={{ color: 'yellow' }}/>
    },
    {
        title : 'Companies',
        icon: <BusinessIcon  fontSize="small" style={{ color: 'yellow' }}/>
    },
    {
        title : 'Keywords',
        icon: <LabelIcon  fontSize="small" style={{ color: 'yellow' }}/>
    }
];


export default function PopperSearch(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const classes = useStyles();

    const handleMenuItemClick = (event, index) => {
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
    return (
        <div className={classes.root} >
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition disablePortal className={classes.Popper}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" className={classes.menuList}>
                                    {options?.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            className={classes.typography}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            <ListItemIcon className={classes.iconsList}>
                                                {item?.icon}
                                                {/* <SearchIcon fontSize="small" style={{ color: 'yellow' }} /> */}
                                            </ListItemIcon>
                                            {item?.title} 

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
                {options[selectedIndex].title}
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
