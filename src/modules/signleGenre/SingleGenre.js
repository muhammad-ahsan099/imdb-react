import { Box, Container, Grid, IconButton, Paper, } from '@material-ui/core'
import React from 'react'
import { useStyles } from "./SingleGenreStyle";
import ShareIcon from '@material-ui/icons/Share';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UseSignleGenre } from './UseSingleGenre';


const MoviesToShow = ({ items, index }) => {
    const Styles = useStyles();
    const userProfile = useSelector(state => state.AuthReducer.userProfile)
    let filterRating;
    if (userProfile?.user_rating?.length >= 0) {
        filterRating = userProfile?.user_rating?.find(item => item?.movie === items?.id)
    }
    return (
        <>
            <div className={Styles.cardMainContainer} key={index}>
                <Link to={`/movie-detail/${items?.imdb_id}/${items?.id}`} className={Styles.link}>
                    <div className={Styles.cardHeaderDiv}>
                        <div>
                            <img src={items?.poster_url ? items?.poster_url : require('../../assets/images/watchCard1.jpg')} alt="not found" height={'70px'} width={'50px'} />
                        </div>
                        <div className={Styles.cardTitleDiv}>
                            <span className={Styles.cardTitle}>{items?.title ? items?.title : 'Nope'} <span>{items?.year ? '(' + items?.year + ')' : '(2022)'}</span></span>
                            <br />
                            <span className={Styles.cardTitleTwo}>1 (* 1)</span>
                        </div>
                    </div>
                </Link>
                <div className={Styles.cardContainer}>
                    <div className={Styles.ratingContainer}>
                        <StarRoundedIcon className={Styles.iconStar} />
                        <span className={Styles.cardRatingTitle}>{items?.imdb_rating ? items?.imdb_rating : '7.0'}</span>
                    </div>
                    <div className={Styles.ratingContainer}>
                        <StarRoundedIcon className={Styles.iconBlueStar} />
                        <span className={Styles.cardRatingTitle}>{filterRating?.ratings}</span>
                    </div>
                    <BookMarkButton
                        movie_id={items?.id}
                        btn_size={"small"}
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default function SingleGenre() {
    const Styles = useStyles();
    const [
        {
            loading,
            title,
            singleGenre,
        }
    ] = UseSignleGenre()

    return (
        <Container>
            <Grid container justifyContent={'center'}>
                {/* ist content */}
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Paper component={Box} className={Styles.istContainer}>
                        <div className={Styles.istContentDiv}>
                            {/* Headings */}
                            <div className={Styles.headingDiv}>
                                <div>
                                    <span className={Styles.istHeading}>IMDb Charts</span> <br />
                                    <span className={Styles.secondHeading}>Top {title} type Movies.</span> <br />
                                    <span className={Styles.secondHeadingDes}>As determined by IMDb Users</span>
                                </div>
                                <div>
                                    <IconButton>
                                        <ShareIcon />
                                    </IconButton>
                                    <br />
                                    <span className={Styles.buttonHeading}>Share</span>
                                </div>
                            </div>

                            {/* underline */}
                            <hr />

                            {/* main content */}
                            <div className={Styles.mainContainer}>
                                <div>
                                    <span className={Styles.labelHeading}>Showing {singleGenre?.length} Titles</span>
                                </div>
                                <div>
                                    <label htmlFor="" className={Styles.labelHeading}>Sort by : </label>
                                    <select name="" id="">
                                        <option value="">Ranking</option>
                                        <option value="">IMDb Rating</option>
                                        <option value="">Release Date</option>
                                        <option value="">Number of Ratings</option>
                                        <option value="">Your Rating</option>
                                    </select>
                                    <IconButton size='small' className={Styles.ImportExportIcon}>
                                        <ImportExportIcon />
                                    </IconButton>
                                </div>
                            </div>

                            {/* cards headings */}
                            <div className={Styles.cardsHeadingsDiv}>
                                <div>
                                    <span className={Styles.cardIstHeading}>Rank & Title</span>
                                </div>
                                <div className={Styles.cardContainer}>
                                    <span className={Styles.cardSecondHeading}>IMDbM <br /> Rating</span>
                                    <span className={Styles.cardSecondHeading}>Your<br /> Rating</span>
                                    <span className={Styles.cardSecondHeading}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </div>
                            </div>

                            {/* cards */}
                            {
                                loading && <p>loading...</p>
                            }
                            {
                                singleGenre?.map((items, index) => {
                                    return (
                                        <MoviesToShow items={items} index={index} />
                                    )
                                })

                            }
                        </div>
                    </Paper>
                </Grid>

                {/* second content */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Paper component={Box} className={Styles.secondContentDiv}>
                        <img src={require('../../assets/images/popularCard2.jpg')} alt="Image Not Found" height={'300px'} width={'100%'} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
