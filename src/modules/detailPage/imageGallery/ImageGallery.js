import React, { useRef } from 'react'
import { useStyles } from "./ImageGalleryStyle";
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

export default function ImageGallery({imageGallery}) {
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
                        Images
                    </h1>
                    <ArrowForwardIosIcon />
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
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        600: {
                            slidesPerView: 3.3,
                            spaceBetween: 16,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        960: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            allowTouchMove: false
                        },
                    }}
                >
                    {
                        imageGallery?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className={Styles.cardDiv} key={index}>
                                            <div className={Styles.cardHeader}>
                                                <div>
                                                    <img src={items.poster_url} alt="Image Not Found" height={'180px'} width={'100%'} />
                                                </div>
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
