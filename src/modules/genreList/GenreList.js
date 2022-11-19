import { Box, Container, Grid, Typography, Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { useStyles } from "./GenreListStyle";
import { UseGenreList } from './UseGenreList';

export default function GenreList() {
    const Styles = useStyles();
    const [
        {
            loading,
            genreList,
        }
    ] = UseGenreList()
    return (
        <>
            <Container>
                <Grid container justifyContent={'center'}>
                    <Grid xs={12} sm={12} md={10} lg={9} className={Styles.mainContainer}>
                        <img src={require('../../assets/images/backImg.jpg')} alt="Image Not Found" height={'270px'} width={'100%'} />
                        <Grid container>
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <Typography variant='h5' className={Styles.istHeading}>
                                    Popular TV Show and Movie Genres
                                </Typography>
                                <Grid container style={{ marginBottom: 40 }}>
                                    {
                                        genreList.map((item, index) => {
                                            return (
                                                <Grid xs={6} sm={4} md={4} lg={4} key={item?.id}>
                                                    <Box className={Styles.cardDiv}>
                                                        <Link to={`/genre/search/title/${item?.title}`}  className={Styles.link}>
                                                            <div className={Styles.bg} style={{ backgroundImage: `url("${item?.imageurl}")` }} >
                                                                <p className={Styles.title}>{item?.title}</p>
                                                            </div>
                                                        </Link>
                                                    </Box>

                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box className={Styles.secondContentDiv}>
                                    <img src={require('../../assets/images/cardImg.jpg')} alt="Image Not Found" height={'300px'} width={'100%'} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

