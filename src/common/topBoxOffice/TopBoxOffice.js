import React from 'react'
import { Styles } from "./TopBoxOfficeStyle";
import newsIcon from "../../assets/images/newsIcon.svg";
import bookIcon from "../../assets/images/bookIcon.svg";
import { boxOfficeData } from "./UseTopBoxOffice";

export default function TopBoxOffice() {
    return (
        <>
            <div style={Styles.mainContainer}>
                {/* Top Box Office container */}
                <div style={Styles.officeContainer}>
                    <div style={Styles.sideLine}></div>
                    <div>
                        <h1 style={Styles.heading}>
                            Top box office (US)
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} style={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span style={Styles.titleDes}>
                    Weekend of August 26-28
                </span>

                {/* small card */}
                <div style={Styles.cardContainer}>
                    {
                        boxOfficeData?.map((items,index) => {
                            return (
                                <>
                                    <div style={Styles.cardDiv}>
                                        <div style={Styles.cardHeader}>
                                            <p style={Styles.headerSrNo}>
                                                {index + 1}
                                            </p>
                                            <div style={Styles.headerSideLine}></div>
                                            <img src={bookIcon} alt="Image Not Found" style={Styles.headerIcon} />
                                        </div>
                                        <div style={Styles.cardFooter}>
                                            <span style={Styles.footerHeading}>
                                                {items.title}
                                            </span>
                                            <br />
                                            <span style={Styles.footerDes}>
                                                {items.review}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
