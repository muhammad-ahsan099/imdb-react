import React, { useRef } from 'react'
import { useStyles } from "./RelatedVideosStyle";
import videoIcon from "../../../assets/images/videoIcon.svg";
import { UseExclusiveVideos } from "../../../components/exclusiveVideos/UseExclusiveVideos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


// import required modules
import { Navigation } from "swiper";

export default function RelatedVideos() {
    const Styles = useStyles();
    const swiperRef = useRef()
    const [{ exclusiveVideos }] = UseExclusiveVideos();
    return (
        <>
            <div className={Styles.mainContainer}>

                {/* Imdb origanls container */}
                <div className={Styles.watchContainer}>
                    <div className={Styles.sideLine}></div>
                        <h1 className={Styles.heading}>
                            Related Videos
                        </h1>
                        <ArrowForwardIosIcon  />
                </div>

                {/* slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    loop={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        600: {
                            slidesPerView: 2.3,
                            spaceBetween: 16,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        960: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            allowTouchMove: false
                        },
                    }}
                >
                    {
                        exclusiveVideos?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className={Styles.cardDiv} key={index}>
                                            <div className={Styles.cardHeader}>
                                                <div>
                                                    <img src={items.img} alt="Image Not Found" height={'240px'} width={'100%'} />
                                                </div>
                                                <div className={Styles.iconDiv}>
                                                    <img src={videoIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                    <p className={Styles.iconTxt}>
                                                        {items.time}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className={Styles.cardTxt}>
                                                    {items.des}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                    <div className={Styles.swiper_button_next} onClick={() => swiperRef.current.slideNext()} ><ArrowNextIcon className={Styles.arrows} /></div>
                    <div className={Styles.swiper_button_prev} onClick={() => swiperRef.current.slidePrev()} ><ArrowBackIcon className={Styles.arrows} /></div>
                </Swiper>
                
            </div>
        </>
    )
}
