
import { Grid } from '@material-ui/core'
import React from 'react'
import VideoPlayer from './videoPlayer/VideoPlayer'
import RelatedVideos from './relatedVideos/RelatedVideos'
import { useStyles } from './TrailersPageStyle'
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton'

export default function TrailersPage() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8} className={classes.leftGrid}>
                    <VideoPlayer />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.rightGrid}>

                    <div className={classes.verticalSliderSlide} >
                        <div className={classes.smallImg} >
                            <BookMarkButton />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <div>
                                <h4 className={classes.movieSmallHeading}>{'item?.title'}</h4>
                                <p className={classes.movieSmallDetail}>Watch the Trailer</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.divider} />

                    <div>
                        <h1 className={classes.heading}>Official Trailer</h1>
                        <p className={classes.desc}>When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.</p>
                    </div>

                </Grid>
            </Grid>

            <RelatedVideos />

        </div>
    )
}
