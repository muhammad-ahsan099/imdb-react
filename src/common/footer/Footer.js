import React from 'react'
import { Styles } from "./FooterStyle";
import listIcon from "../../assets/images/listIcon.svg";
import icon from "../../assets/images/icon.svg";
import UseWindowDimensions from '../customHooks/UseWindowDimensions'
import { useStyles } from './FooterStyle';
import { footerData, footerIconsData } from "./UseFooter";

export default function Footer() {
    const width = UseWindowDimensions()
    const Styles = useStyles()
    return (
        <>
            <div className={Styles.container}>
                {/* icons */}
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    {
                        footerIconsData?.map((items, index) => {
                            return (
                                <>
                                    <a href={items.link}>
                                        <img src={items.icon} alt="icon not found" style={Styles.icons} />
                                    </a>
                                </>
                            )
                        })
                    }
                </div>

                {/* list One */}
                <div style={Styles.listContainer}>
                    {
                        footerData?.map((items) => {
                            return (
                                items?.heading === 'Ist Links' ?
                                    <>
                                        {
                                            items?.subLinks?.map((items, index) => {
                                                return (
                                                    <>
                                                        <div key={index} style={Styles.listDiv}>
                                                            <div>
                                                                <p>
                                                                    <a href={items.link} style={Styles.linkTag} target={'_blank'}>
                                                                        {items.title}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a href={items.link} target={'_blank'}>
                                                                    <img src={listIcon} alt="icon not found" style={Styles.imgMargin} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </> :
                                    <></>
                            )
                        })
                    }
                </div>

                {/* list Two */}
                <div style={Styles.listContainer}>
                    {
                        footerData?.map((items) => {
                            return (
                                items?.heading === '2nd Links' ?
                                    <>
                                        {
                                            items?.subLinks?.map((items, index) => {
                                                return (
                                                    <>
                                                        <div key={index} style={Styles.listDiv}>
                                                            <div>
                                                                <p>
                                                                    <a href={items.link} style={Styles.linkTag} target={'_blank'}>
                                                                        {items.title}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a href={items.link} target={'_blank'}>
                                                                    <img src={listIcon} alt="icon not found" style={Styles.imgMargin} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </> :
                                    <></>
                            )
                        })
                    }
                </div>


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
