import { Button } from '@material-ui/core';
import React from 'react'
import { Styles } from "./MoreToWatchStyle";
import videoIcon from "../../assets/images/videoIcon.svg";
import { moreWatchData } from "./UseMoreToWatch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function MoreToWatch() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* More To Watch container */}
                <div style={Styles.watchContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            More to watch
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span style={Styles.titleDes}>
                    IMDb helps you select the perfect next show or movie to watch.
                </span>

                {/* buttons */}
                <div style={Styles.watchButtonsDiv}>
                    <div>
                        <Button variant="outlined" size="medium" style={Styles.watchButton}>
                            Watch Guide
                        </Button>
                    </div>
                    <div>
                        <Button variant="outlined" size="medium" style={Styles.watchButton}>
                            Most Popular
                        </Button>
                    </div>

                </div>

                {/* heading */}
                <h1 style={Styles.mainWatchTxt}>
                    Exclusive videos
                </h1>


                {/* Imdb origanls container */}
                <div style={Styles.watchContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            IMDb Originals
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span style={Styles.titleDes}>
                    Celebrity interviews, trending entertainment stories, and expert analysis
                </span>

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
                        moreWatchData?.map((items, index) => {
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
                                            <div>
                                                <p style={Styles.cardTxt}>
                                                    {items.des}
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
