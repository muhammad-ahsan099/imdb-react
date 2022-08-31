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
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { IoPlayCircleOutline } from "react-icons/io5";
import TwoS from '../../../assets/movies/2s.jpg'
import ArrowIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { useStyles } from "./SwiperStyle";
import { BsFillBookmarkCheckFill , BsFillBookmarkPlusFill } from "react-icons/bs";


export default function SwiperComponent() {
    const classes = useStyles()
    const [slideIndex, setSlideIndex] = useState(0)
    const swiper1Ref = useRef();
    const swiper2Ref = useRef();
    console.log('swiper2Ref', swiper2Ref.current?.activeIndex);
    console.log('slideIndex', slideIndex);

    useLayoutEffect(() => {
        swiper1Ref.current.controller.control = swiper2Ref.current;
        swiper2Ref.current.controller.control = swiper1Ref.current;
    }, []);


    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiper1Ref.current = swiper;
                        }}
                        autoplay = {{
                            delay: 2000
                        }}
                        className={classes.swiper}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation, Controller]}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div className={classes.swiper_slide}>
                                            <div className={classes.bottomSection}>
                                                <div className={classes.inner_poster}>
                                                <BsFillBookmarkCheckFill className={classes.wishListIcon} />
                                                <BsFillBookmarkPlusFill className={classes.wishListIcon} />
                                                </div>
                                                <div className={classes.bottomMiddleSection}>
                                                    <IoPlayCircleOutline size={90} className={classes.playIcon} />
                                                    <div>
                                                        <h1 className={classes.movieHeading}>'The Inivation' Stars Ask Each Other Anything</h1>
                                                        <p className={classes.movieDetail}>Watch the Interview</p>
                                                    </div>
                                                </div>
                                                <div className={classes.bottomRightSection}>
                                                    <p className={classes.time}>2:30</p>
                                                </div>
                                            </div>
                                        </div>
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
                    item xs={0} sm={0} md={4} lg={4} className={classes.rightGrid}>
                    <div className={classes.verticalSliderContainer}>
                        <h2 className={classes.smallHeadingTop}>Up next</h2>

                        <Swiper
                            onSwiper={(swiper) => {
                                swiper2Ref.current = swiper;
                            }}
                            autoplay = {{
                                delay: 2000
                            }}    
                            effect={'fade'}
                            loop={true}
                            direction={"vertical"}
                            scrollbar={{ draggable: false }}
                            slidesPerView={3}
                            className={classes.verticalSwiper}
                            modules={[Pagination, Navigation, Controller]}
                            onSlideChange={() => setSlideIndex(swiper2Ref.current?.activeIndex)}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                disabledClass: 'disabled_swiper_button'
                            }}
                            allowTouchMove={false}
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                    // console.log('index', index);
                                    return (
                                        <SwiperSlide>
                                            <div
                                                className={clsx(classes.verticalSliderSlide,
                                                    slideIndex === index && classes.activeVerticalSlide)}
                                            >
                                                <img src={TwoS} className={classes.smallImg} alt='img' />
                                                <div style={{ marginLeft: 10 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <IoPlayCircleOutline size={40} className={classes.playSmallIcon} />
                                                        <p className={classes.smallTime}>2:30</p>

                                                    </div>

                                                    <div>
                                                        <h4 className={classes.movieSmallHeading}>'The Inivation' Stars Ask Each Other Anything</h4>
                                                        <p className={classes.movieSmallDetail}>Watch the Interview</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            <div class="swiper-button-nextt" ><ArrowNextIcon className={classes.arrows} /></div>
                            <div class="swiper-button-prevv" ><ArrowBackIcon className={classes.arrows} /></div>
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
