import React from 'react'
import { Styles } from "./BornTodayStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import { bornCardData } from "./UseBornToday";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function BornToday() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* Born Today container */}
                <div style={Styles.bornContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            Born today
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} style={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span style={Styles.titleDes}>
                    People born on August 29
                </span>

                {/* slider */}
                <Swiper
                    slidesPerView={5}
                    spaceBetween={2}
                    slidesPerGroup={5}
                    loop={false}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                >
                    {
                        bornCardData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div style={Styles.cardDiv}>
                                            <div>
                                                <img src={items.img} alt="Image Not Found" style={Styles.img} />
                                            </div>
                                            <div style={Styles.cardTxtDiv}>
                                                <h2 style={Styles.cardHeading}>
                                                    {items.title}
                                                </h2>
                                                <p style={Styles.cardDes}>
                                                    {items.rate}
                                                </p>
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
