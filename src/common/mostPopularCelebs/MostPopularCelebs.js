import { Box, Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./MostPopularCelebsStyle";

export default function MostPopularCelebs() {
    const Styles = useStyles();
    return (
        <>
            <Container>
                <Paper component={Box} className={Styles.istContainer}>
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Paper component={Box} className={Styles.istContainerDiv}>
                                {/* titles */}
                                <div>
                                    <h2>Match All (Sorted by Popularity Ascending)</h2>
                                    <div className={Styles.headingDiv}>
                                        <span className={Styles.headingDivTxt}>1-50 of 12,022,908 names.</span>
                                        <div className={Styles.sideLine}></div>
                                        <span className={Styles.headingDivTitle}>Next</span>
                                    </div>
                                    <div className={Styles.headingDiv}>
                                        <span className={Styles.headingDivTxt}>Sort by: STARmeter</span>
                                        <div className={Styles.sideLine}></div>
                                        <span className={Styles.headingDivTitle}>A-Z</span>
                                        <div className={Styles.sideLine}></div>
                                        <span className={Styles.headingDivTitle}>Birth Date</span>
                                        <div className={Styles.sideLine}></div>
                                        <span className={Styles.headingDivTitle}>Death Date</span>
                                    </div>
                                </div>

                                {/* card */}
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => {
                                        return (
                                            <>
                                                <div className={Styles.cardContainer}>
                                                    <div className={Styles.cardDiv}>
                                                        <div className={Styles.imgDiv}>
                                                            <img src={require('../../assets/images/popularCard.jpg')} alt="image not found" height={'220px'} width={'100%'} />
                                                        </div>
                                                        <div className={Styles.contentContainer}>
                                                            <div>
                                                                <span>1. </span>
                                                                <span className={Styles.cardMainHeading}>Milly Alcock</span>
                                                            </div>
                                                            <div className={Styles.headingDiv}>
                                                                <span className={Styles.headingDivTxt}>Actress</span>
                                                                <div className={Styles.sideLine}></div>
                                                                <span className={Styles.headingDivTitle}>Upright</span>
                                                            </div>
                                                            <div>
                                                                <p className={Styles.cardDes}>
                                                                    Milly Alcock is an Australian actress known for roles,
                                                                    that include regular appearances in Janet King (2017) and A Place to Call Home,
                                                                    Fighting Season and Pine Gap (2018), Les Norton (2019), The Gloaming and Reckoning (2020).
                                                                    She also appeared in Upright (2019-2022), and beginning in August 2022, ...
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Paper>
                        </Grid>
                        <Grid xs={12} sm={12} md={4} lg={4} className={Styles.secondContainer}>
                            <div className={Styles.secondImgDiv}>
                                <img src={require('../../assets/images/popularCard2.jpg')} alt="Image Not Found" height={'300px'} width={'100%'} />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}
