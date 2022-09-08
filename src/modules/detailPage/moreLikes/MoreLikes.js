
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation} from "swiper";
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';


import MovieCard from '../../../common/movieCard/MovieCard'
import { useStyles } from './MoreLikeStyle';
import { Button } from '@material-ui/core';

export default function MoreLikes(props) {

    const {heading, subHeading, bgColor, movies } = props;
    const classes = useStyles()
    const swiper1Ref = useRef();


    return (
        <div className={classes.container}>
            <div className={classes.topPicks}>
                <div className={classes.line} />
                <h1 className={classes.h3}>{heading}</h1>
            </div>
            <p className={classes.topPicksText}>{subHeading}</p>
            <Swiper
                onSwiper={(swiper) => {
                    swiper1Ref.current = swiper;
                }}
                slidesPerView={6}
                slidesPerGroup={6}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                allowTouchMove={false}
                className={classes.swiper}
                breakpoints={{
                    0: {
                        slidesPerView: 2.2,
                        slidesPerGroup: 1,
                        speed: 1200,
                        allowTouchMove: true,

                    },
                    600: {
                        slidesPerView: 4.2,
                        slidesPerGroup: 2,
                        speed: 1200,
                        allowTouchMove: true,
                    },
                    960: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        allowTouchMove: false,
                        mousewheel: true,
                    },
                }}
            >
                {
                    movies?.map((item, index) => {
                        return (
                            <SwiperSlide className={classes.swiper_slide} key={index}>
                                <div className={classes.innerSwiperSlide}>
                                    <MovieCard  bgColor={bgColor} moviesData={item} />
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
                <div className={classes.swiper_button_next} onClick={() => swiper1Ref.current.slideNext(1000, true)}><ArrowNextIcon className={classes.arrows} /></div>
                <div className={classes.swiper_button_prev} onClick={() => swiper1Ref.current.slidePrev(1000, true)}><ArrowBackIcon className={classes.arrows} /></div>

            </Swiper>
        </div>
    )
}
