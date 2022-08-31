import React from "react";
import { Styles } from "./TopNewsStyle";
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


export default function TopNews() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* news container */}
                <div style={Styles.newsContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            Top news
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} style={Styles.headingIcon} />
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
                    style={{
                        "--swiper-navigation-color": "#f8f9fa",
                    }}
                >
                    {
                        cardData?.map((items, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div style={Styles.cardDiv}>
                                            {/* image */}
                                            <div>
                                                <img src={items.img} alt="Image Not Found" height={'150px'} />
                                            </div>

                                            {/* description */}
                                            <div style={Styles.desDiv}>
                                                <p style={Styles.cardDes}>
                                                    {items.description}
                                                </p>
                                                <p style={Styles.cardAuth}>
                                                    {items.author}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>

                {/* buttons */}
                <div style={Styles.buttonDiv}>
                    {
                        buttonData.map((items, index) => {
                            return (
                                <>
                                    <Button variant="outlined" style={Styles.buttons} key={index}>
                                        {items.title}
                                    </Button>
                                </>
                            )
                        })
                    }
                </div>

                {/* recently viewed */}
                <h1 style={Styles.recentTitle}>
                    Recently viewed
                </h1>

                {/* description */}
                <p style={Styles.lastTitle}>
                    You have no recently viewed pages
                </p>

                {/* Sign in Button */}
                <div style={Styles.signInButtonDiv}>
                    <Button variant="contained" size="medium" style={Styles.signInButton}>
                        Sign in for more access
                    </Button>
                </div>
            </div>
        </>
    )
}
