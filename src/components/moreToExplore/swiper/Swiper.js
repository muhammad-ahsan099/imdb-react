import React, { useRef } from 'react'
import editerIcon from "../../../assets/images/editerIcon.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper classes
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useStyles } from './SwiperStyle';
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';


import { Navigation } from "swiper";

export default function EditorPicks({editorPicks}) {

    const classes = useStyles()
    const swiperRef = useRef()
    return (
        <>
            <h1 className={classes.mainExploreTxt}>
                More to explore
            </h1>
            <div className={classes.mainContainer} >
                {/* More To Explore container */}
                <div className={classes.exploreContainer}>
                    <div className={classes.sideLine}></div>
                    <div>
                        <h1 className={classes.heading}>
                            Editor's picks
                        </h1>
                    </div>
                </div>

                {/* slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    loop={false}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200
                        },
                        600: {
                            slidesPerView: 2.4,
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200
                        },
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup:3
                        },
                    }}
                >
                    {
                        editorPicks?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className={classes.cardDiv}>
                                            <div className={classes.cardHeader}>
                                                <div>
                                                    <img src={items.img} alt="Image Not Found" height={'240px'} width={'100%'} />
                                                </div>
                                                <div className={classes.iconDiv}>
                                                    <img src={editerIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                    <p className={classes.iconTxt}>
                                                        {items.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className={classes.cardTxt}>
                                                    {items.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                    <div className={classes.swiper_button_next} onClick={() => swiperRef.current.slideNext()} ><ArrowNextIcon className={classes.arrows} /></div>
                    <div className={classes.swiper_button_prev} onClick={() => swiperRef.current.slidePrev()} ><ArrowBackIcon className={classes.arrows} /></div>

                </Swiper>
            </div>
        </>
    )
}
