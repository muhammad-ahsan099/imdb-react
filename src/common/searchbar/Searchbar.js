
import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CrossIcon from '@material-ui/icons/CloseRounded';
import clsx from "clsx";


// import Style at the End of imports 
import { useStyles } from './SearchbarStyle';
import PopperSearch from '../popperComponent/popperSearch/PopperSearch';
import { Hidden, IconButton } from '@material-ui/core';

export default function Searchbar() {
    const classes = useStyles();
    const [searchActive, setSearchActive] = useState(false)
    const [mobShow, setMobShow] = useState(false)
    return (
        <>
            <Hidden xsDown>
                <div className={clsx(classes.searchContainer, searchActive && classes.outLine)} >
                    <PopperSearch />
                    <div className={classes.divider} />
                    <input
                        type={"text"}
                        // onChange={(e) => onTextChangeHandler(e.target.value)}
                        className={classes.input}
                        placeholder='Search IMDb'
                        onFocus={() => setSearchActive(true)}
                        onBlur={() => setSearchActive(false)}
                    />
                    <div className={classes.icon} >
                        <SearchIcon style={{ color: "#92929D" }} />
                    </div>
                </div>
            </Hidden>

            <Hidden smUp>

                <div className={classes.searchBtn} >
                    <IconButton
                        color="inherit"
                        aria-label="search"
                        // disableFocusRipple
                        // disableRipple
                        onClick={() => setMobShow(!mobShow)}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
                {
                    mobShow
                    &&
                    <div className={classes.mobileSearch}>
                        <input
                            type={"text"}
                            // onChange={(e) => onTextChangeHandler(e.target.value)}
                            className={classes.inputMobile}
                            placeholder='Search IMDb'
                        />
                        <div className={classes.icon}
                            onClick={() => setMobShow(false)}
                        >
                            <CrossIcon style={{ color: "#fff" }} />
                        </div>
                    </div>
                }
            </Hidden>
        </>
    )
}
