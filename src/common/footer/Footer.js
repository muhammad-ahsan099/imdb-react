import React from 'react'
import { Styles } from "./FooterStyle";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import listIcon from "../../assets/images/listIcon.svg";
import icon from "../../assets/images/icon.svg";
import UseWindowDimensions from '../customHooks/UseWindowDimensions'
import { useStyles } from './FooterStyle';

export default function Footer() {
    const width = UseWindowDimensions()
    const Styles = useStyles()
    return (
        <>
            <div className={Styles.container}>
                {/* icons */}
                <ul className={Styles.icons}>
                    <li className={Styles.iconColor}>
                        <FacebookIcon />
                    </li>
                    <li className={Styles.iconColor}>
                        <InstagramIcon />
                    </li>
                    <li className={Styles.iconColor}>
                        <img src={icon} alt="icon not found" />
                    </li>
                    <li className={Styles.iconColor}>
                        <TwitterIcon />
                    </li>
                    <li className={Styles.iconColor}>
                        <YouTubeIcon />
                    </li>
                </ul>

                {/* list */}
                <div className={Styles.div}>
                    <ul className={Styles.list}>
                        <span className={Styles.hideiconColor}>
                            Get the IMDb App
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                        <span className={Styles.iconColor}>
                            Help
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                        <span className={Styles.iconColor}>
                            Site Index
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                        <span className={Styles.iconColor}>
                            IMDbPro
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                        <span className={Styles.iconColor}>
                            Box Office Mojo
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                        <span className={Styles.iconColor}>
                            IMDb Developer
                            <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                        </span>
                    </ul>
                </div>
                <ul className={Styles.list}>
                    <span className={Styles.iconColor}>Press Room</span>
                    <span className={Styles.iconColor}>
                        Advertising
                        <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                    </span>
                    <span className={Styles.iconColor}>
                        Jobs
                        <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                    </span>
                    <span className={Styles.iconColor}>Condition of Use</span>
                    <span className={Styles.iconColor}>Privacy Policy</span>
                    <span className={Styles.iconColor}>
                        Interst-Based Ads
                        <img src={listIcon} alt="icon not found" height={'11px'} className={Styles.imgMargin} />
                    </span>
                </ul>


                {/* heading 1 */}
                <p className={Styles.headingOne}>
                    an <span className={Styles.amazonTxt}>amazon</span> company
                </p>

                {/* heading 2 */}
                <p className={Styles.headingTwo}>
                    &copy; 1990-2022 by IMDb.com.Inc.
                </p>
            </div>
        </>
    )
}
