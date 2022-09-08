import React, { useRef } from 'react'
import Swiper from './swiper/Swiper';
import { useStyles } from './MoviesAndStreamingStyle';

export default function MoviesAndStreaming(props) {
  const {primeVideos, recentReleasedMovies} = props;
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <h1 className={classes.h1} >Explore what's streaming</h1>
      <Swiper
        isSwiper
        btn
        heading={'Prime Video'}
        subHeading={'included with prime'} 
        movies={primeVideos}
      />

      <h1 className={classes.h1} >Explore movies and TV <br/> shows</h1>

      <Swiper
        isSwiper
        heading={'In theaters'}
        subHeading={'Showtimes near you'}
        movies={recentReleasedMovies}
      />
      <div className={classes.topSpace} />


    </div>
  )
}
