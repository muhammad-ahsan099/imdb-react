import React from 'react'
import { Styles } from "./WatchListStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import bookIcon from "../../assets/images/bookIcon.svg";
import { Button } from "@material-ui/core";

export default function WatchList() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* WatchList container */}
                <h1 style={Styles.mainWatchTxt}>
                    What to watch
                </h1>
                <div style={Styles.watchListContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            From your Watchlist
                            <img src={newsIcon} alt="Icon Not Found" style={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* content */}
                <div style={Styles.contentContainer}>
                    <img src={bookIcon} alt="Image Not Found" style={Styles.contentIcon} />
                    <span style={Styles.contentHeading}>
                        Sign in to access your Watchlist
                    </span>
                    <br />
                    <span style={Styles.contentDes}>
                        Save shows and movies to keep track of what you want to watch.
                    </span>

                    {/* Sign in Button */}
                    <div style={Styles.signInButtonDiv}>
                        <Button variant="contained" size="medium" style={Styles.signInButton}>
                            Sign in to IMDb
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
