import { Box, Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./CelebrityDetailStyle";
import { UseCelebrityDetail } from './UseCelebrityDetail';

export default function CelebrityDetail() {
    const Styles = useStyles();
    const [
        {
            loading,
            celbrityDetail,
        }
    ] = UseCelebrityDetail()
    return (
        <>
            <Paper component={Box} className={Styles.istContainer}>
                <Grid container justifyContent={'flex-start'}>
                    <Grid item xs={12} sm={8} md={9} lg={9}>
                        <Paper component={Box} className={Styles.istContainerDiv}>
                            {
                                loading ?
                                    <div className={Styles.loader}>{'loading...'}</div>
                                    :
                                    <>
                                        <div className={Styles.cardContainer}>
                                            <div className={Styles.cardDiv}>
                                                <div className={Styles.imgDiv}>
                                                    <img src={celbrityDetail?.avatar ? celbrityDetail?.avatar : require('../../assets/images/popularCard2.jpg')} alt="image not found" height={'100px'} width={'70px'} style={{ objectFit: 'cover' }} />
                                                </div>
                                                <div className={Styles.contentContainer}>
                                                    <span className={Styles.cardMainHeading}>{celbrityDetail?.name ? celbrityDetail?.name : 'Milly Alcock'}</span>
                                                    <h2 className={Styles.bioText}>Biography</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={Styles.overview}>Overview</p>
                                        <div className={Styles.overviewDiv}>
                                            <p className={Styles.born}>Born</p>
                                            <p className={Styles.bornPlaceText}>October 28, 1982 in {celbrityDetail?.birth_place ? celbrityDetail?.birth_place : 'USA'}</p>
                                        </div>
                                        <div className={Styles.overviewDiv}>
                                            <p className={Styles.born}>Birth Name</p>
                                            <p className={Styles.bornPlace}>{celbrityDetail?.birth_name ? celbrityDetail?.birth_name : ''}</p>
                                        </div>
                                        <div className={Styles.overviewDiv}>
                                            <p className={Styles.born}>Married</p>
                                            <p className={Styles.bornPlace}>{celbrityDetail?.is_married ? 'Yes' : 'No'}</p>
                                        </div>
                                        <div className={Styles.overviewDiv}>
                                            <p className={Styles.born}>Height</p>
                                            <p className={Styles.bornPlace}>October 28, 1982 in Northampton, Northamptonshire, England, UK</p>
                                        </div>



                                        <p className={Styles.overview}>Mini Bio</p>

                                        <div className={Styles.desc}>
                                            <p className={Styles.bornPlace}>
                                                {
                                                    celbrityDetail?.description ?
                                                        celbrityDetail?.description
                                                        :
                                                        "Matt Smith is an English actor who shot to fame in the UK aged 26 when he was cast by producer Steven Moffat as the Eleventh Doctor in the BBC's iconic science-fiction adventure series Doctor Who (2005). Matthew Robert Smith was born and raised in Northampton, the son of Lynne (Fidler) and David Smith. He was educated at Northampton School For Boys. He studied Drama and Creative Writing at the University of East Anglia. He got into acting through the National Youth Theatre and performed with the Royal Court and the National Theatre. Smith made his television debut in The Ruby in the Smoke (2006) and won several further roles on television but was largely unknown when he was announced as the surprise choice for the role of the Eleventh Doctor in Doctor Who. He was younger than any other actor to have taken the role (Peter Davison was previously the youngest, aged 29 when he was cast in 1981). Smith starred in 49 episodes of Doctor Who (three short of his predecessor, David Tennant). He left in the momentous 50th anniversary year of the Doctor Who legend in 2013, which included starring in the 50th anniversary special, Doctor Who: The Day of the Doctor (2013), which found him acting with Tennant, guest star John Hurt and the oldest living and longest-serving actor to play the Doctor, Tom Baker."
                                                }
                                            </p>
                                        </div>
                                    </>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
