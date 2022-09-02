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

                {/* Sign in Button */}
                <div className={classes.signInButtonDiv}>
                    <Button variant="contained" size="medium" className={classes.signInButton}>
                        Sign in for more access
                    </Button>
                </div>
            </div>
        </>
    )
}
