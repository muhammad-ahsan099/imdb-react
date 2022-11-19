import { Box, Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { useStyles } from "./MostPopularCelebsStyle";
import { UseMostPopularCelebs } from './UseMostPopularCelebs';

export default function MostPopularCelebs() {
    const Styles = useStyles();
    const [
        {
            loading,
            popularCelebs,
        }
    ] = UseMostPopularCelebs()
    return (
        <>
            <Container>
                <Paper component={Box} className={Styles.istContainer}>
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={12} sm={12} md={8} lg={7}>
                            <Paper component={Box} className={Styles.istContainerDiv}>
                                {/* titles */}
                                {/* <div>
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
                                </div> */}

                                {/* card */}
                                {
                                    popularCelebs?.map((items, index) => {
                                        return (
                                            <>
                                                <div className={Styles.cardContainer}>
                                                    <div className={Styles.cardDiv}>
                                                        <div className={Styles.imgDiv}>
                                                            <img src={items?.avatar} alt="image not found" height={'220px'} width={'150px'} />
                                                        </div>
                                                        <div className={Styles.contentContainer}>
                                                            <Link to={`/celebrity-detail/${items?.id}`}>
                                                            <div>
                                                                <span>{items?.rank}. </span>
                                                                <span className={Styles.cardMainHeading}>{items?.name}</span>
                                                            </div>
                                                            </Link>
                                                            <div className={Styles.headingDiv}>
                                                                <span className={Styles.headingDivTxt}>{items?.gender === 'Female' ? 'Actress' : 'Actor'}</span>
                                                                <div className={Styles.sideLine}></div>
                                                                <span className={Styles.headingDivTitle}>Upright</span>
                                                            </div>
                                                            <div>
                                                                <p className={Styles.cardDes}>
                                                                    {items?.description?.slice(0,350)}
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
                        <Grid xs={12} sm={6} md={4} lg={4} className={Styles.secondContainer}>
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
