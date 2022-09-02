import React, { useRef } from "react";
import {useStyles } from "./TopNewsStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import { cardData } from "./UseTopNews";
import { buttonData } from "./UseTopNews";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';



export default function TopNews() {
    const Styles = useStyles()
    const swiperRef = useRef()
    return (
        <>
            <div className={Styles.mainContainer}>
                {/* news container */}
                <div className={Styles.newsContainer}>
                    <div className={Styles.sideLine}></div>
                    <div>
                        <h1 className={Styles.heading}>
                            Top news
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} className={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>

                {/* cards slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    slidesPerGroup={2}
                    loop={false}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
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
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        960: {
                            slidesPerView: 3,
                            allowTouchMove: false,
                            slidesPerGroup:3
                        },
                    }}
                >
                    {
                        cardData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className={Styles.cardDiv}>
                                            {/* image */}
                                            <div>
                                                <img src={items.img} alt="Image Not Found" height={'150px'} />
                                            </div>

                                            {/* description */}
                                            <div className={Styles.desDiv}>
                                                <p className={Styles.cardDes}>
                                                    {items.description}
                                                </p>
                                                <p className={Styles.cardAuth}>
                                                    {items.author}
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

                {/* buttons */}
                <div className={Styles.buttonDiv}>
                    {
                        buttonData.map((items, index) => {
                            return (
                                <>
                                    <Button variant="outlined" className={Styles.buttons} key={index}>
                                        {items.title}
                                    </Button>
                                </>
                            )
                        })
                    }
                </div>
        </div>
        </>
    )
}
