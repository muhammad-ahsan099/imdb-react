import React from 'react'
import { Styles } from "./MoreToExploreStyle";
import editerIcon from "../../assets/images/editerIcon.svg";
import { exploreCardData } from "./UseMoreToExplore";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function MoreToExplore() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* More To Explore container */}
                <h1 style={Styles.mainExploreTxt}>
                    More to explore
                </h1>
                <div style={Styles.exploreContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
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
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                >
                    {
                        exploreCardData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div style={Styles.cardDiv}>
                                            <div style={Styles.cardHeader}>
                                                <div>
                                                    <img src={items.img} alt="Image Not Found" height={'240px'} width={'100%'} />
                                                </div>
                                                <div style={Styles.iconDiv}>
                                                    <img src={editerIcon} alt="Image Not Found" height={'32px'} width={'32px'} />
                                                    <p style={Styles.iconTxt}>
                                                        {items.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p style={Styles.cardTxt}>
                                                    {items.description}
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
