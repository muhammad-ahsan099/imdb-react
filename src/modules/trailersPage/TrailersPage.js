
import { Grid, IconButton } from '@material-ui/core'
import React from 'react'
import VideoPlayer from './videoPlayer/VideoPlayer'
import RelatedVideos from './relatedVideos/RelatedVideos'
import { useStyles } from './TrailersPageStyle'
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton'
import { Link, useLocation, useParams } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { UseTrailerPage } from './UseTrailerPage'

export default function TrailersPage() {
    const classes = useStyles()
    const [
        {
            loading,
            movieDetail,
        }
    ] = UseTrailerPage()
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8} className={classes.leftGrid}>
                    <VideoPlayer video_url={movieDetail?.video_url} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.rightGrid}>
                    <Link to={`/movie-detail/${movieDetail?.imdb_id}/${movieDetail?.id}`} className={classes.link}>
                        <div className={classes.verticalSliderSlide} >
                            <div className={classes.smallImg} style={{ backgroundImage: `url("${movieDetail?.poster_url}")` }}  >
                                <BookMarkButton movie_id={movieDetail?.id} />
                            </div>
                            <div style={{ width: '90%', marginLeft: 10, display:'flex',alignItems: 'flex-start',  justifyContent:'space-between'}}>
                                <div>
                                    <h4 className={classes.movieSmallHeading}>{movieDetail?.title}</h4>
                                    {
                                        movieDetail?.genre?.map((genreName, index) => {
                                            return (
                                                <p className={classes.movieSmallDetail} key={index}>
                                                    {genreName}{','}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                                <IconButton
                                    color="inherit"
                                    size='large'
                                    className={classes.iconBtn}
                                >
                                    <ArrowForwardIosIcon style={{color: '#fff'}} fontSize='small' />
                                </IconButton>
                            </div>
                        </div>
                    </Link>

                    <div className={classes.divider} />

                    <div>
                        <h1 className={classes.heading}>Official Trailer</h1>
                        <p className={classes.desc}>{movieDetail?.description}</p>
                    </div>

                </Grid>
            </Grid>

            <RelatedVideos videoGallery= {movieDetail?.video_gallery} />
        </div>
    )
}
