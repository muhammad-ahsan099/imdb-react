import React, { useRef } from 'react'
import { Styles } from "./ComingSoonStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import videoIcon from "../../assets/images/videoIcon.svg";
import bookIcon from "../../assets/images/bookIcon.svg";
import { comingSoonData } from "./UseComingSoon";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useStyles } from './ComingSoonStyle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIcon from '@material-ui/icons/NavigateBefore';
import ArrowNextIcon from '@material-ui/icons/NavigateNext';


// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function ComingSoon() {
    const swiperRef = useRef();
    const Styles = useStyles()

    return (
        <>
            <div className={Styles.mainContainer}>
                {/* coming soon container */}
                <div className={Styles.soonContainer}>
                    <div className={Styles.sideLine}></div>
                    <div>
                        <h1 className={Styles.heading}>
                            Coming soon to theaters
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} className={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span className={Styles.titleDes}>
                    Trailers for upcoming releases
                </span>

                {/* Slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    loop={false}
                    // loopFillGroupWithBlank={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className={Styles.swiper}
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            spaceBetween:10,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        600: {
                            slidesPerView: 2.4,
                            spaceBetween:10,
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
                        comingSoonData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className={Styles.cardDiv}>
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

                                            <div className={Styles.cardFooter}>
                                                <div>
                                                    <img src={bookIcon} alt="Image Not Found" height={'70px'} width={'70px'} />
                                                </div>

                                                <div className={Styles.footerDesDiv}>
                                                    <span className={Styles.cardYear}>{items.year}</span>
                                                    <br />
                                                    <span className={Styles.cardTxt}>
                                                        {items.des}
                                                    </span>
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
