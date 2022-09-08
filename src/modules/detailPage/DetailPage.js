

import { Button, Grid, IconButton } from '@material-ui/core';
import React from 'react'
import BookMarkButton from '../../common/BookMarkButton/BookMarkButton';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PermMediaIcon from '@material-ui/icons/PermMedia'; import { useStyles } from './DetailPageStyle'
import PRO_LOGO from '../../assets/icons/pro-logo.svg'
import listIcon from "../../assets/images/listIcon.svg";
import listIconBlack from "../../assets/images/listIconBlack.svg";
import AddIcon from '@material-ui/icons/AddOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VideoGallery from './videoGallery/VideoGallery';
import ImageGallery from './imageGallery/ImageGallery';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MoreLikes from './moreLikes/MoreLikes';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { useSelector } from 'react-redux';
import StarUnfillIcon from '@material-ui/icons/StarBorderOutlined';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ArrowUp from '@material-ui/icons/KeyboardArrowUpRounded';
import ArrowDown from '@material-ui/icons/KeyboardArrowDownRounded';
import { UseDetail } from './UseDetail';
import Review from './review/Review';
import { IoPlayCircleOutline } from "react-icons/io5";
import RatingModal from '../../common/ratingModal/RatingModal';
import ListModal from '../../common/listModal/ListModal';
export default function DetailPage() {
    const classes = useStyles();
    const topPickMovies = useSelector(state => state.LandingPageReducer.topPickMovies)
    const [
        {
            dropDown, setDropDown,
            drawerOpen, setDrawerOpen,
            rating, setRating,
            openRatingModal, setOpenRatingModal,
            openListModal, setOpenListModal,
        }
    ] = UseDetail()

    return (
        <>
            <div className={classes.root}>
                <div className={classes.topContainer}>
                    <div>
                        <h1 className={classes.h1}>Top Gun</h1>
                        <span className={classes.year}>2022 </span>&nbsp;
                        <span className={classes.year}>.</span> &nbsp;
                        <span className={classes.year}>1h 50m </span>
                    </div>

                    <div className={classes.ratingContainer}>
                        <div className={classes.ratingInnerOne}>
                            <p className={classes.imdbRatingTitle}>IMDB RATING</p>
                            <Button
                                variant='outlined'
                                className={classes.ratingBtn}
                            >
                                <div className={classes.ratingDiv}>
                                    <StarRoundedIcon fontSize='large' className={classes.fillIcon} />
                                    <div className={classes.ratingsDiv} >
                                        <span className={classes.rating}>6.9</span><span className={classes.totalRating}>/10</span>
                                        <p className={classes.votes}>417K</p>
                                    </div>
                                </div>
                            </Button>
                        </div>

                        <div className={classes.ratingInnerTwo}>
                            <p className={classes.imdbRatingTitle}>YOUR RATING</p>
                            <Button
                                variant='outlined'
                                className={classes.ratingBtn}
                                onClick={() => setOpenRatingModal(true)}
                            >
                                <div className={classes.ratingDiv}>
                                    <StarUnfillIcon className={classes.unfillIcon} />
                                    <div >
                                        <h2 className={classes.rateText}>Rate</h2>
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <Grid container spacing={0} className={classes.Container}>
                    <div className={classes.leftGrid}>
                        <div className={classes.leftPoster}>
                            <BookMarkButton />
                        </div>
                    </div>
                    <div className={classes.middlePoster}>
                        <div className={classes.rightPoster}>
                            <div className={classes.playTrailerDiv}>
                                <IoPlayCircleOutline className={classes.playIcon} />
                                <p className={classes.trailerText}>Play trailer</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightGrid}>
                        <div className={classes.videos}>
                            <VideoLibraryIcon className={classes.icon} />
                            <p className={classes.videoText}>15 VIDEOS</p>
                        </div>
                        <div className={classes.videos}>
                            <PermMediaIcon className={classes.icon} />
                            <p className={classes.videoText}>99+ PHOTOS</p>
                        </div>
                    </div>
                </Grid>

                <div className={classes.smallScreenButtons}>
                    <div className={classes.videos}>
                        <VideoLibraryIcon className={classes.icon} />
                        <p className={classes.videoText}>15 VIDEOS</p>
                    </div>
                    <div className={classes.videos}>
                        <PermMediaIcon className={classes.icon} />
                        <p className={classes.videoText}>99+ PHOTOS</p>
                    </div>
                </div>

                <div className={classes.detailSection}>
                    <div className={classes.leftSection}>
                        <Button
                            variant='outlined'
                            className={classes.genreButton}
                        >
                            Action
                        </Button>
                        <p className={classes.description}>
                            As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.
                        </p>

                        <div className={classes.smallScreenRating}>
                            <Button
                                variant='outlined'
                                className={classes.ratingBtn}
                            >
                                <div className={classes.ratingDiv}>
                                    <StarRoundedIcon className={classes.fillIcon} />
                                    <div >
                                        <span className={classes.rating}>6.9</span><span className={classes.totalRating}>/10</span>
                                        <span className={classes.votes}>417K</span>
                                    </div>
                                </div>
                            </Button>

                            <Button
                                variant='outlined'
                                className={classes.ratingBtn}
                            >
                                <div className={classes.ratingDiv}>
                                    <StarUnfillIcon className={classes.unfillIcon} />
                                    <div >
                                        <h2 className={classes.rateText}>Rate</h2>
                                    </div>
                                </div>
                            </Button>

                        </div>

                        <div className={classes.topCredits} onClick={() => setDropDown(!dropDown)}>
                            {dropDown ? <ArrowUp /> : <ArrowDown />} Top credits
                        </div>

                        {
                            dropDown &&
                            <div className={classes.dropDownSection}>
                                <div className={classes.divider} />
                                <div className={classes.starsContainer}>
                                    <p className={classes.starText}>Director</p>
                                    <p className={classes.starName}>Tony Scott</p>
                                </div>
                                <div className={classes.divider} />
                                <div className={classes.starsContainer}>
                                    <p className={classes.starText}>Writers</p>
                                    <p className={classes.starName}>Jim Cash</p>
                                </div>
                                <div className={classes.divider} />
                                <div className={classes.starsContainer}>
                                    <p className={classes.starText}>Stars</p>
                                    <p className={classes.starName}>Tom Cruise</p>
                                </div>
                                <div className={classes.divider} />
                                <div className={classes.starsContainer}>
                                    <img src={PRO_LOGO} alt="imagelogo" />
                                    <p className={classes.imdbProText}>See production, box office & company info</p>
                                    <img src={listIcon} alt="icon not found" className={classes.imgMargin} />
                                </div>
                            </div>
                        }

                    </div>
                    <div className={classes.rightSection}>
                        <div className={classes.wishListBtnDiv}>
                            <Button
                                variant='outlined'
                                className={classes.wishlistBtn}
                                startIcon={<AddIcon />}
                            >
                                Add to wishlist
                            </Button>
                            <Button
                                variant='outlined'
                                className={classes.dropdownBtn}
                                onClick={()=> setOpenListModal(true)}
                            >
                                <KeyboardArrowDownIcon />
                            </Button>

                        </div>
                        <div className={classes.metaScoreDiv}>

                            <div className={classes.metascore}>
                                <span>64</span>
                            </div>
                            <span className={classes.metascoreText}>Metascore</span>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <VideoGallery />
                <ImageGallery />
            </div>

            <div className={classes.movieDetailSection}>
                <div className={classes.watchContainer}>
                    <div className={classes.sideLine}></div>
                    <h1 className={classes.heading}>
                        Details
                    </h1>
                </div>

                <div className={classes.movieDetail}>
                    <div className={classes.divider} />
                    <div className={classes.starsContainer}>
                        <p className={classes.starTextTwo}>Release  Date</p>
                        <p className={classes.starName}>May 15, 2022</p>
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.starsContainer}>
                        <p className={classes.starTextTwo}>Country of origin</p>
                        <p className={classes.starName}>America</p>
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.starsContainer}>
                        <p className={classes.starTextTwo}>Language</p>
                        <p className={classes.starName}>English</p>
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.imdbProDiv}>
                        <p className={classes.starTextTwo}>See more company credits at IMDbPro</p>
                        <img src={listIconBlack} alt="icon not found" className={classes.imgMargin} />
                    </div>
                </div>

                <div className={classes.topMargin} />
                <div className={classes.movieDetail}>
                    <div className={classes.reviewTop}>
                        <div className={classes.watchContainer}>
                            <div className={classes.sideLine}></div>
                            <h1 className={classes.heading}>
                                User reviews
                            </h1>
                            <ArrowForwardIosIcon />
                        </div>
                        <Button
                            variant='outlined'
                            className={classes.reviewAddButton}
                            startIcon={<AddIcon />}
                            onClick={() => setDrawerOpen(true)}
                        >
                            Review
                        </Button>

                    </div>
                    <div className={classes.reviewContent}>
                        <div className={classes.topReview}>TOP REVIEW</div>

                        <p className={classes.reviewTitle}>This has become a genuine modern classic.</p>
                        <p className={classes.amountText}>I just watched this again in preparation for the 2020 sequel where, I believe, Maverick returns as an instructor. I watched it at home on one of the more recent DVD versions in widescreen format and with DTS surround sound. With a good home theater system, including a good powered subwoofer, the sound track is amazingly good.

                            This may be the role that defined Tom Cruise more than any other, as Navy fighter pilot, code named Maverick. In his back story his dad had been a fighter pilot killed in the 1960s in Vietnam and Maverick seemingly has spent his life living up to, or exceeding, his dad's legacy. Most of the story here takes place in California at Top Gun school where the top 1% Navy pilots compete for number one.
                            Cruise was probably 23 during filming, the cast has several other 20-something actors who went on to good careers in film. I know it has some cheesy parts but overall this is a fine movie that entertains and deserves its place among modern classic movies.
                        </p>

                        <div className={classes.likesContainer}>
                            <ThumbUpAltOutlinedIcon className={classes.likeIcon} />
                            <p className={classes.helpful}>helpful</p>
                            <div className={classes.dot} />
                            <p className={classes.helpful}>15</p>
                            <ThumbDownAltOutlinedIcon className={classes.likeIcon} />
                            <p className={classes.helpful}>8</p>
                        </div>
                    </div>
                </div>
                <div className={classes.topMargin} />

                <MoreLikes
                    heading={'More like this'}
                    bgColor={true}
                    movies={topPickMovies}
                />
                <div className={classes.topMargin} />
                <div className={classes.watchContainer}>
                    <div className={classes.sideLine}></div>
                    <h1 className={classes.heading}>
                        Box office
                    </h1>
                </div>
                <div className={classes.boxOffice}>
                    <p className={classes.starTextTwo}>Budget</p>
                    <p className={classes.amountText}>$60338293 (estimated)</p>
                    <p className={classes.starTextTwo}>Gross worldwide</p>
                    <p className={classes.amountText}>$357,288,178</p>
                </div>
                <div className={classes.topMargin} />
                <div className={classes.watchContainer}>
                    <div className={classes.sideLine}></div>
                    <h1 className={classes.heading}>
                        Technical specs
                    </h1>
                    <ArrowForwardIosIcon />
                </div>
                <div className={classes.techSpecs}>
                    <p className={classes.starTextTwo}>Runtime</p>
                    <p className={classes.specsText}>1h 20m</p>
                </div>

                <MoreLikes
                    heading={'Top picks'}
                    subHeading={'TV shows and movies just for you'}
                    bgColor={true}
                    movies={topPickMovies}
                />

                {/* Review Drawer  */}
                <Review
                    drawerOpen={drawerOpen}
                    setDrawerOpen={setDrawerOpen}
                />
                {/* Rating Modal  */}
                <RatingModal
                    openRatingModal={openRatingModal}
                    setOpenRatingModal={setOpenRatingModal}
                    rating={rating}
                    setRating={setRating}
                />
                {/* List Modal  */}
                <ListModal 
                    openListModal={openListModal}
                    setOpenListModal={setOpenListModal}
                />
                
            </div>
        </>
    )
}
