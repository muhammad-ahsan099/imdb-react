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
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import BookMarkButton from '../BookMarkButton/BookMarkButton';

export default function ComingSoon(props) {
    const { recentUpcomingMovies } = props;
    const swiperRef = useRef();
    const Styles = useStyles();

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
                            spaceBetween: 10,
                            slidesPerGroup: 1,
                            speed: 1200,
                            allowTouchMove: true
                        },
                        600: {
                            slidesPerView: 2.4,
                            spaceBetween: 10,
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
                        recentUpcomingMovies?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index} >
                                        <div className={Styles.cardDiv} key={index}>
                                            <div className={Styles.cardHeader}>
                                                <div className={Styles.imgContainer}>
                                                    <img src={items?.video_poster_url} alt="Image Not Found" className={Styles.mainImg} />
                                                </div>
                                                <div className={Styles.iconDiv}>
                                                    <img src={videoIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                    <p className={Styles.iconTxt}>
                                                        {items?.year}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={Styles.cardFooter}>
                                                <div>
                                                    <BookMarkButton />
                                                </div>

                                                <div className={Styles.footerDesDiv}>
                                                    <span className={Styles.cardYear}>
                                                        {'items.title'}
                                                    </span>
                                                    <br />
                                                    <span className={Styles.cardTxt}>{items?.title}</span>
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
