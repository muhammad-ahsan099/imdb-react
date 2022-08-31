import React from 'react'
import { Styles } from "./ComingSoonStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import videoIcon from "../../assets/images/videoIcon.svg";
import bookIcon from "../../assets/images/bookIcon.svg";
import { comingSoonData } from "./UseComingSoon";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function ComingSoon() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* coming soon container */}
                <div style={Styles.soonContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            Coming soon to theaters
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} style={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span style={Styles.titleDes}>
                    Trailers for upcoming releases
                </span>

                {/* Slider */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    loop={false}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                >
                    {
                        comingSoonData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div style={Styles.cardDiv}>
                                            <div style={Styles.cardHeader}>
                                                <div>
                                                    <img src={items.img} alt="Image Not Found" height={'240px'} width={'100%'} />
                                                </div>
                                                <div style={Styles.iconDiv}>
                                                    <img src={videoIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                    <p style={Styles.iconTxt}>
                                                        {items.time}
                                                    </p>
                                                </div>
                                            </div>

                                            <div style={Styles.cardFooter}>
                                                <div>
                                                    <img src={bookIcon} alt="Image Not Found" height={'70px'} width={'70px'} />
                                                </div>

                                                <div style={Styles.footerDesDiv}>
                                                    <span style={Styles.cardYear}>{items.year}</span>
                                                    <br />
                                                    <span style={Styles.cardTxt}>
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
                </Swiper>
            </div>
        </>
    )
}
