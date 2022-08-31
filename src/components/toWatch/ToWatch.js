
import React, { useRef } from 'react'
import Swiper from './swiper/Swiper';
import { useStyles } from './ToWatchStyle';

export default function ToWatch() {

  const classes = useStyles()
  const swiper1Ref = useRef();


  return (
    <div>
      <h1 className={classes.h1} >What to watch</h1>
      <Swiper
        isSwiper
        heading={'Top picks'}
        subHeading={'TV shows and movies just for you'}
      />
      <div className={classes.topSpace} />
      <Swiper
        isSwiper
        heading={'From your Watchlist'}
        subHeading={'Movies and TV shows that you have watchlisted'}
      />
      <div className={classes.topSpace} />
      <Swiper
        isSwiper
        heading={'Fan favorites'}
        subHeading={"This week's top TV and movies"}
      />
      <div className={classes.topSpace} />
      <Swiper
        isSwiper={false}
        heading={'More to watch'}
        subHeading={"IMDb helps you select the perfect next show or movie to watch."}
      />
      <div className={classes.topSpace} />


    </div>
  )
}
