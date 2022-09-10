import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import Two from '../../assets/movies/2.jpg'
import TwoS from '../../assets/movies/2s.jpg'


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // height: 1000,
        backgroundColor: commonColor.cardBg,
        padding: '0px 5%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 2.5%',
        },
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    h1: {
        color: commonColor.white,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: '400',
        fontSize: 50,
        margin: 0,
        marginTop: 32,
        [theme.breakpoints.down('xs')]: {
            fontSize: 32,
            marginTop: 20,
        },

    },
    year: {
        color: '#848484',
        fontWeight: '500',
    },
    ratingContainer: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    ratingInnerOne: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingInnerTwo: {
        marginLeft: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imdbRatingTitle: {
        margin: 0,
        color: '#848484',
        fontSize: 14,
        fontWeight: '500',
    },
    ratingBtn: {
        textTransform: 'none',
        color: 'rgb(91,136,244)',
        border: 'none',
        height: 45,
        '&:hover': {
            backgroundColor: commonColor.watchBtn,
        },
    },
    ratingDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    ratingsDiv: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
    },
    fillIcon: {
        color: commonColor.themeColor,
        fontSize: 40,
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
    },
    unfillIcon: {
        color: 'rgb(91,136,244)',
        fontSize: 40,
        [theme.breakpoints.up('xs')]: {
            fontSize: 26,
        },
    },
    rating: {
        margin: 0,
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        [theme.breakpoints.up('xs')]: {
            fontSize: 14,
        },
    },
    totalRating: {
        color: '#848484',
        [theme.breakpoints.up('xs')]: {
            fontSize: 12,
        },
    },
    votes: {
        margin: 0,
        color: '#848484',
        marginTop: -2,
        fontSize: 13,
        display: 'block',
        [theme.breakpoints.up('xs')]: {
            fontSize: 12,
            display: 'inline-block',
            marginLeft: 8
        },
    },
    rateText: {
        margin: 0,
        color: 'rgb(91,136,244)',
        marginLeft: 4,
        [theme.breakpoints.up('xs')]: {
            fontSize: 16,
        },

    },
    smallScreenRating: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    Container: {
        height: 420,
        width: '100%',
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            height: 350,
        },
        "@media(max-width: 700px)": {
            display: 'flex',
            alignItems: 'flex-end',
            height: '30vh'
        },
        "@media(max-width: 510px)": {
            height: '25vh'
        }
    },
    leftGrid: {
        height: 'auto',
        width: '20%',
        [theme.breakpoints.down('sm')]: {
            width: '26%',
            height: '100%'
        },
        "@media(max-width: 700px)": {
            height: 180,
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        "@media(max-width: 510px)": {
            height: 140
        }
    },
    leftPoster: {
        // backgroundImage: `url(${TwoS})`,
        width: '98%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
        },
        "@media(max-width: 700px)": {
            width: '120px',
            height: '143px',
            backgroundSize: 'contain',
            marginLeft: 16,
            marginBottom: 10,
        },
    },
    middlePoster: {
        width: '65%',
        [theme.breakpoints.down('sm')]: {
            width: '74%',
        },
        "@media(max-width: 700px)": {
            width: '100%',
            height: '100%',
        }
    },
    rightPoster: {
        cursor: 'pointer',
        // backgroundImage: `url("${Two}")`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
        paddingLeft: 14,
        paddingRight: 14,
        "@media(max-width: 960px)": {
            justifyContent: 'flex-end'
        },
        "@media(max-width: 700px)": {
            objectPosition: 'center',
            objectPosition: '50% 50%',
        },
    },
    playTrailerDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    rightGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '15%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    smallScreenButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    videos: {
        width: '100%',
        height: '49.5%',
        backgroundColor: commonColor.galleryCardBg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    icon: {
        color: '#fff',
        fontSize: 34,
        marginBottom: 8,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
            marginRight: 20
        }
    },
    videoText: {
        color: '#fff',
        textTransform: 'upper',
        margin: 0,
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 'normal',
            fontSize: 12
        }
    },
    detailSection: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 24,
        marginTop: '24px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        // alignItems: 'center',
        // backgroundColor: 'orange',
    },
    leftSection: {
        width: '58%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    genreButton: {
        textTransform: 'none',
        margin: '0px 14px 18px 0px',
        padding: '2px 10px',
        color: '#fff',
        border: '2.5px solid #848484',
        borderRadius: 50,
        fontWeight: '500',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.1)'
        },
    },
    description: {
        color: '#fff',
        margin: 0,
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 8,
    },
    topCredits: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        height: 50,
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    dropDownSection: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: 20,
        },
    },
    divider: {
        width: '100%',
        height: '0.7px',
        backgroundColor: '#848484',
        margin: '12px 0px',
        opacity: 0.7
    },
    starsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    imdbProDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
    starText: {
        color: '#fff',
        margin: 0,
        fontWeight: 'bold',
        fontSize: 16,
    },
    starName: {
        color: 'rgb(91,136,244)',
        margin: 0,
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 20,
    },
    imdbProText: {
        color: '#fff',
        margin: 0,
        fontSize: 14,
        marginLeft: 10,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    imgMargin: {
        marginLeft: '5px',
        height: '10px'
    },
    rightSection: {
        marginTop: 14,
        width: '35%',
        "@media(max-width: 960px)": {
            width: '49%',
        },
        "@media(max-width: 600px)": {
            width: '68%',
        },
    },
    wishListBtnDiv :{
        display: 'flex',
        alignItems: 'center',
    },
    metaScoreDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        "@media(max-width: 960px)": {
            justifyContent: 'flex-start',
        },
    },
    metascore: {
        padding: '1px 2px',
        backgroundColor: '#12b71e',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    metascoreText :{
        fontWeight: '600',
        fontSize: 16,
        paddingLeft: 10,
        color: 'rgb(91,136,244)',
        textAlign: 'right',
        marginTop: 3,
    },
    wishlistBtn: {
        width: '90%',
        height: 50,
        textTransform: 'none',
        // padding: '2px 10px',
        // margin: '24px 14px 18px 0px',
        borderRadius: 'none',
        // border: '2.5px solid #848484',
        // backgroundColor: '#848484',
        backgroundColor: 'rgba(158, 158, 158, 0.1)',
        color: '#fff',
        fontWeight: '500',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },

    },
    dropdownBtn: {
        height: 50,
        color: '#fff',
        borderRadius: 'none',
        backgroundColor: 'rgba(158, 158, 158, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },
        marginLeft: 4
    },
    movieDetailSection: {
        marginTop: -20,
        backgroundColor: commonColor.white,
        padding: '0px 5%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 3%',
        },
    },
    watchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    sideLine: {
        height: '34px',
        width: '4px',
        backgroundColor: '#ffbe0b',
    },
    heading: {
        color: '#000',
        marginLeft: '5px',
        marginRight: 16,
        fontSize: 32
    },
    movieDetail: {
        width: '58%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    reviewTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewAddButton: {
        textTransform: 'none',
        height: 40,
        color: 'rgb(91,136,244)',
        border: 'none',
        fontWeight: 'bold',
    },
    reviewTitle: {
        color: '#000',
        margin: 0,
        marginBottom: 14,
        fontWeight: 'bold',
        fontSize: 17,
    },
    starTextTwo: {
        color: '#000',
        margin: 0,
        fontWeight: 'bold',
        fontSize: 16,
    },
    topMargin: {
        marginTop: 30,
    },
    boxOffice: {
        marginTop: 10
    },
    amountText: {
        margin: 0,
        color: commonColor.cardBg,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 6
    },
    techSpecs: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    specsText: {
        color: commonColor.cardBg,
        margin: 0,
        fontWeight: '400',
        fontSize: 16,
        marginLeft: 16,
    },
    reviewContent: {
        padding: '27px 20px 14px',
        boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
    },
    topReview: {
        backgroundColor: commonColor.themeColor,
        display: 'inline-block',
        padding: '1px 30px 1px 10px',
        borderRadius: 8,
        fontWeight: '600',
        fontSize: 13,
        marginBottom: 20
    },
    likesContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1000,
        backgroundColor: '#848484'
    },
    likeIcon: {
        color: '#848484'
    },
    helpful: {
        margin: 0,
        margin: '0px 8px',
        fontSize: '500'
    },
    trailerText: {
        margin: 0,
        color: '#fff',
        fontSize: 26,
        fontWeight: '400',
        "@media(max-width: 960px)": {
            fontSize: 20,
        }
    },
    playIcon: {
        marginTop: -16,
        borderRadius: 50,
        fontSize: 70,
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
            color: commonColor.themeColor,
        },
        "@media(max-width: 960px)": {
            marginTop: 0,
            fontSize: 40,
        }
    },
    link: {
        textDecoration: 'none',
        cursor: 'pointer'
    }
}));
