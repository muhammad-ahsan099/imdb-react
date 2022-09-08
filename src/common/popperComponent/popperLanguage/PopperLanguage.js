import React from 'react';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { ClickAwayListener, FormLabel, ListItemIcon, MenuItem, MenuList, RadioGroup, FormControl, FormControlLabel, Radio } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useStyles } from './PopperLanguageStyle'


export default function PopperLanguage(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [value, setValue] = React.useState('english');

    const classes = useStyles();

    const handleMenuItemClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleClose = (event) => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const options = [
        {
            label: 'Français (Canada)',
            value: 'franciCanada'
        },
        {
            label: 'Deutsch (Deutschland)',
            value: 'deutsch'
        },
        {
            label: 'हिंदी (भारत)',
            value: 'hindi'
        },
        {
            label: 'Italiano (Italia)',
            value: 'italia'
        },
        {
            label: 'Português (Brasil)',
            value: 'brasil'
        },
        {
            label: 'Español (España)',
            value: 'espana'
        },
        {
            label: 'Español (México)',
            value: 'mexico'
        }
    ]

    return (
        <div className={classes.root} onMouseLeave={()=> handleClose()}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition disablePortal>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <FormControl component="fieldset" className={classes.menuList}>
                                    <p className={classes.label1}>FULLY SUPPORTED</p>
                                    <RadioGroup value={value} onChange={handleChange} className={classes.RadioGroupOne}>
                                        <FormControlLabel
                                            value="english"
                                            label="English (United States)"
                                            className={classes.formControlOne}
                                            classes={{label: classes.labelRadioGroupOne}}
                                            control={<Radio
                                                color='secondary'
                                                classes={{
                                                    root: classes.radio,
                                                    checked: classes.checked,
                                                }} />}

                                        />
                                    </RadioGroup>

                                    <p className={classes.label2}>PARTIALLY SUPPORTED</p>
                                    <RadioGroup value={value} onChange={handleChange} className={classes.RadioGroupTwo}>
                                        {
                                            options.map((item, index) => {
                                                return (
                                                    <FormControlLabel
                                                        classes={{label: classes.label}}
                                                        key={index}
                                                        control={<Radio
                                                            color='secondary'
                                                            classes={{
                                                                root: classes.radio,
                                                                checked: classes.checked,
                                                            }} />}
                                                        value={item?.value}
                                                        label={item?.label}
                                                        className={classes.typography}
                                                    />

                                                )
                                            })
                                        }

                                    </RadioGroup>
                                </FormControl>

                            </ClickAwayListener>

                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Button
                onClick={handleMenuItemClick('bottom-end')}
                className={classes.listBtn}
            >
                EN
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
