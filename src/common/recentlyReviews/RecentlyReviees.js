import React from "react";
import { useStyles } from "./RecentlyReviewsStyle";
import { Button } from "@material-ui/core";


export default function RecentlyReviews() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.mainContainer}>

                {/* recently viewed */}
                <h1 className={classes.recentTitle}>
                    Recently viewed
                </h1>

                {/* description */}
                <p className={classes.lastTitle}>
                    You have no recently viewed pages
                </p>
            </div>
            {/* Sign in Button */}
            <div className={classes.signInButtonDiv}>
                <Button variant="contained" size="medium" className={classes.signInButton}>
                    Sign in for more access
                </Button>
            </div>

            <div className={classes.signInButtonDivTwo}>
                <a className={classes.aTag} href='https://apps.apple.com/us/app/id342792525?_branch_match_id=1065606664196751523&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot' target={'_blank'}>
                    <Button variant="contained" size="medium" className={classes.signInButton}>

                        Get the IMDb App
                    </Button>
                </a>
            </div>

            <div className={classes.signInButtonSmallDiv}>
                <Button
                    variant='outlined'
                    className={classes.siginInSmall}
                >
                    {'Sign in for more access'}
                </Button>
            </div>
        </>
    )
}
