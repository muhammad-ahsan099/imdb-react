import React, { useLayoutEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./styles.css";
// import required modules
// import { Navigation, Pagination } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Grid, Hidden } from "@material-ui/core";
import { IoPlayCircleOutline } from "react-icons/io5";
import TwoS from '../../../assets/movies/2s.jpg'
import ArrowIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { useStyles } from "./SwiperStyle";
import { BsFillBookmarkCheckFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import bookIcon from '../../../assets/images/bookIcon.svg'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Link } from "react-router-dom";
import BookMarkButton from "../../../common/BookMarkButton/BookMarkButton";
export default function SwiperComponent(props) {
    const { homeMoviesTop } = props;
    const classes = useStyles();
    const [slideIndex, setSlideIndex] = useState(0)
    const swiper1Ref = useRef();
    const swiper2Ref = useRef();

    useLayoutEffect(() => {
        swiper1Ref.current.controller.control = swiper2Ref.current;
        swiper2Ref.current.controller.control = swiper1Ref.current;
    }, []);

    const [check, setCheck] = useState(false)

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiper1Ref.current = swiper;
                        }}
                        autoplay={{
                            delay: 2000
                        }}
                        className={classes.swiper}
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Controller]}
                    >
                        {
                            homeMoviesTop?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={`/movie-trailer/${item?.imdb_id}/${item?.id}`} >
                                            <div className={classes.swiper_slide} style={{ backgroundImage: `url("${item?.video_poster_url}")` }} >
                                                <div className={classes.bottomSection}>
                                                    <div className={classes.inner_poster} style={{ backgroundImage: `url("${item?.poster_url}")` }}>
                                                        <BookMarkButton movie_id={item?.id} />
                                                    </div>


                                                    <div className={classes.bottomMiddleSection}>
                                                        {/* Mobile View  */}
                                                        <div className={classes.hiddenMob}>
                                                            <IoPlayCircleOutline className={classes.playIconHidden} />
                                                            <p className={classes.timeHidden}>2:30</p>
                                                        </div>
                                                        {/* Web View */}
                                                        <IoPlayCircleOutline size={90} className={classes.playIcon} />
                                                        <div className={classes.textContent}>
                                                            <h1 className={classes.movieHeading}>{item?.title}</h1>
                                                            <p className={classes.movieDetail}>Watch the Trailer</p>
                                                        </div>
                                                        <p className={classes.time}>2:30</p>
                                                        {/* </div>
                                                <div className={classes.bottomRightSection}> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }

                        <div className={classes.swiper_button_next} onClick={() => swiper1Ref.current.slideNext()}><ArrowNextIcon className={classes.arrows} /></div>
                        <div className={classes.swiper_button_prev} onClick={() => swiper1Ref.current.slidePrev()}><ArrowBackIcon className={classes.arrows} /></div>

                    </Swiper>
                </Grid>

                {/* <Hidden smDown > */}
                <Grid
                    item md={4} lg={4} className={classes.rightGrid}>
                    <div className={classes.verticalSliderContainer}>
                        <h2 className={classes.smallHeadingTop}>Up next</h2>
                        <div className={classes.bgDiv} />
                        <Swiper
                            onSwiper={(swiper) => {
                                swiper2Ref.current = swiper;
                            }}
                            autoplay={{
                                delay: 2000
                            }}
                            loop={true}
                            direction={"vertical"}
                            scrollbar={{ draggable: false }}
                            slidesPerView={3}
                            className={classes.verticalSwiper}
                            modules={[Controller]}
                            onSlideChange={() => setSlideIndex(swiper2Ref.current?.activeIndex)}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                disabledClass: 'disabled_swiper_button'
                            }}
                            allowTouchMove={false}
                            effect={"fade"}
                        // fadeEffect={true}
                        >
                            {
                                homeMoviesTop?.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div
                                                className={clsx(classes.verticalSliderSlide,
                                                    slideIndex === index && classes.activeVerticalSlide)}
                                            >
                                                <img src={item?.poster_url} className={classes.smallImg} alt='img' />
                                                <div style={{ marginLeft: 10 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <IoPlayCircleOutline size={40} className={classes.playSmallIcon} />
                                                        <p className={classes.smallTime}>2:30</p>
                                                    </div>

                                                    <div>
                                                        <h4 className={classes.movieSmallHeading}>{item?.title}</h4>
                                                        <p className={classes.movieSmallDetail}>Watch the Trailer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* <div class="swiper-button-nextt" ><ArrowNextIcon className={classes.arrows} /></div>
                            <div class="swiper-button-prevv" ><ArrowBackIcon className={classes.arrows} /></div> */}
                        </Swiper>
                        <div className={classes.browseContainer}>
                            <h3 className={classes.brwoseHeading}>Browse trailers</h3>
                            <ArrowIcon fontSize="small" className={classes.arrowIcon} />
                        </div>
                    </div>
                </Grid>
                {/* </Hidden> */}
            </Grid>
        </div>
    );
}
