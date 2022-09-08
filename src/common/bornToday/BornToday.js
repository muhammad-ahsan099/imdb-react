import React, { useRef } from 'react'
import { useStyles } from "./BornTodayStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import { bornCardData } from "./UseBornToday";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';


// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function BornToday(props) {

    const { celebritiesBirthday } = props;
    const swiperRef = useRef();
    const Styles = useStyles()

    return (
        <>
            <div className={Styles.mainContainer}>
                {/* Born Today container */}
                <div className={Styles.bornContainer}>
                    <div className={Styles.sideLine}></div>
                    <div>
                        <h1 className={Styles.heading}>
                            Born today
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} className={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span className={Styles.titleDes}>
                    People born on August 29
                </span>

                {
                    celebritiesBirthday?.length > 3 &&

                    < Swiper
                        spaceBetween={10}
                        // style={{
                        //     "--swiper-navigation-color": "#f8f9fa",
                        // }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
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
                        className={Styles.swiper}
                        breakpoints={{
                            0: {
                                slidesPerView: 2.2,
                                allowTouchMove: true,
                                slidesPerGroup: 1,
                                speed: 1200
                            },
                            600: {
                                slidesPerView: 4.2,
                                allowTouchMove: true,
                                slidesPerGroup: 1,
                                speed: 1200

                            },
                            960: {
                                slidesPerView: 6,
                                allowTouchMove: false,
                                slidesPerGroup: 6,

                            },
                        }}
                    >
                        {
                            celebritiesBirthday?.map((items, index) => {
                                return (
                                    <>
                                        <SwiperSlide key={index}>
                                            <div className={Styles.cardDiv}>
                                                <div >
                                                    <img src={items?.avatar} alt="Image Not Found" className={Styles.img} />
                                                </div>
                                                <div className={Styles.cardTxtDiv}>
                                                    <h2 className={Styles.cardHeading}>
                                                        {items.title}
                                                    </h2>
                                                    <p className={Styles.cardDes}>
                                                        {items?.name}
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
                }
            </div>
        </>
    )
}
