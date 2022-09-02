import React from 'react'
import newsIcon from "../../assets/images/newsIcon.svg";
import bookIcon from "../../assets/images/bookIcon.svg";
import { boxOfficeData } from "./UseTopBoxOffice";
import { useStyles } from './TopBoxOfficeStyle'

export default function TopBoxOffice() {

    const Styles = useStyles()
    return (
        <>
            <div className={Styles.mainContainer}>
                {/* Top Box Office container */}
                <div className={Styles.officeContainer}>
                    <div className={Styles.sideLine}></div>
                    <div>
                        <h1 className={Styles.heading}>
                            Top box office (US)
                            <img src={newsIcon} alt="Icon Not Found" height={'18px'} className={Styles.headingIcon} />
                        </h1>
                    </div>
                </div>


                {/* description */}
                <span className={Styles.titleDes}>
                    Weekend of August 26-28
                </span>

                {/* small card */}
                <div className={Styles.cardContainer}>
                    {
                        boxOfficeData?.map((items, index) => {
                            return (
                                <>
                                    <div className={Styles.cardDiv}>
                                        <div className={Styles.cardHeader}>
                                            <p className={Styles.headerSrNo}>
                                                {index + 1}
                                            </p>
                                            <div className={Styles.headerSideLine}></div>
                                            <img src={bookIcon} alt="Image Not Found" className={Styles.headerIcon} />
                                        </div>
                                        <div className={Styles.cardFooter}>
                                            <span className={Styles.footerHeading}>
                                                {items.title}
                                            </span>
                                            <br />
                                            <span className={Styles.footerDes}>
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
