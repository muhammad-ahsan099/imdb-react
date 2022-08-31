import React from 'react'
import { Styles } from "./FooterStyle";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import listIcon from "../../assets/images/listIcon.svg";
import icon from "../../assets/images/icon.svg";

export default function Footer() {
    return (
        <>
            <div style={Styles.container}>
                {/* icons */}
                <ul style={Styles.icons}>
                    <li style={Styles.iconColor}>
                        <FacebookIcon />
                    </li>
                    <li style={Styles.iconColor}>
                        <InstagramIcon />
                    </li>
                    <li style={Styles.iconColor}>
                        <img src={icon} alt="icon not found" />
                    </li>
                    <li style={Styles.iconColor}>
                        <TwitterIcon />
                    </li>
                    <li style={Styles.iconColor}>
                        <YouTubeIcon />
                    </li>
                </ul>

                {/* list */}

                <ul style={Styles.list}>
                    <li style={Styles.iconColor}>
                        Get the IMDb App
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        Help
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        Site Index
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        IMDbPro
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        Box Office Mojo
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        IMDb Developer
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                </ul>
                <ul style={Styles.list}>
                    <li style={Styles.iconColor}>Press Room</li>
                    <li style={Styles.iconColor}>
                        Advertising
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>
                        Jobs
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                    <li style={Styles.iconColor}>Condition of Use</li>
                    <li style={Styles.iconColor}>Privacy Policy</li>
                    <li style={Styles.iconColor}>
                        Interst-Based Ads
                        <img src={listIcon} alt="icon not found" height={'11px'} style={Styles.imgMargin} />
                    </li>
                </ul>


                {/* heading 1 */}
                <p style={Styles.headingOne}>
                    an <span style={Styles.amazonTxt}>amazon</span> company
                </p>

                {/* heading 2 */}
                <p style={Styles.headingTwo}>
                    &copy; 1990-2022 by IMDb.com.Inc.
                </p>
            </div>
        </>
    )
}
