import { makeStyles } from "@material-ui/core";
import Two from '../../../assets/movies/2.jpg'
import TwoS from '../../../assets/movies/2s.jpg'
import { commonColor } from "../../../constants/colors";
import bookIcon from '../../../assets/images/bookIcon.png'
import ActiveBookmark from '../../../assets/images/activeBookmark.png';


export const useStyles =  makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        height: 550,
        padding: '0px 4%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 1%',
        },
        "@media(max-width: 730px)": {
            height: 400,
        },
        "@media(max-width: 510px)": {
            height: 320,
        },
    },
    // overLay: {
    //     pointer: 'cursor',
    //     '&:hover': {
    //         backgroundColor:'rgba(0,0,0,.75)',
    //     },

    // },
    swiper: {
        width: '100%',
        height: 550,
        padding: 0,
        cursor: 'pointer',
        "@media(max-width: 730px)": {
            height: 400,
        },
        "@media(max-width: 510px)": {
            height: 320,
        },
    },
    swiper_slide: {
        // backgroundImage: `url("${Two}")`,
        // backgroundColor: props => props.bg ? 'pink' : 'blue',
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 12,
        right: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

    },
    inner_poster: {
        // backgroundImage: `url(${TwoS})`,
        width: '150px',
        height: '215px',
        [theme.breakpoints.down('sm')]: {
            width: '132px',
            height: '195px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90px',
            height: '133px'
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start'
    },
    iconContainer: {
        backgroundImage: `url(${bookIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 45,
        width: 43,
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 600px)": {
            height: 25,
            width: 23,
        },

    },
    wishListIcon: {
        color: '#fff',
        backgroundColor: 'transparent',
        marginTop: -8,
        marginLeft: 5,
        borderRadius: 50,
        "@media(max-width: 600px)": {
            marginLeft: 1,
            fontSize: 16
        },
    },
    iconActiveContainer: {
        backgroundImage: `url(${ActiveBookmark})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 45,
        width: 43,
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 600px)": {
            // marginTop: '0px',
            // marginLeft: -15,
            // marginRight: -11,
            height: 25,
            width: 23,
        },

    },

    bottomMiddleSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '80%',
        "@media (min-width: 790px)": {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            width: '85%',
        },
    },
    textContent: {
        width: '75%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },

    },
    bottomRightSection: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            backgroundColor: 'pink'
        },
    },
    playIcon: {
        marginTop: -16,
        borderRadius: 50,
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
            color: commonColor.themeColor,
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },

    },
    playIconHidden: {
        marginTop: -16,
        borderRadius: 50,
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
            color: commonColor.themeColor,
        },
        "@media (max-width: 600px)": {
            fontSize: 50,
            // marginTop: -6,
        },
    },
    movieHeading: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'left',
        color: '#fff',
        margin: 0,
        marginLeft: 14,
        padding: 0,
        lineHeight: 'normal',
        "@media (max-width: 600px)": {
            fontSize: 24,
            marginLeft: 12,
        },
    },
    movieDetail: {
        color: '#afafaf',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'left',
        margin: 0,
        marginLeft: 14,
    },
    hiddenMob: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
        alignItems: 'flex-end',
        marginLeft: 8,
    },
    time: {
        color: '#afafaf',
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 30,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    timeHidden: {
        color: '#afafaf',
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 30,
        "@media (max-width: 600px)": {
            paddingLeft: 16,
        },

    },
    rightGrid: {
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
    ,
    verticalSliderContainer: {
        width: '100%',
        height: 550,
        padding: 0,
        backgroundColor: 'black'
    },
    smallHeadingTop: {
        color: commonColor.themeColor,
        textAlign: 'left',
        margin: 0,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 20,

    },
    verticalSwiper: {
        width: '100%',
        height: 440,
        padding: 0,
    },
    bgDiv: {
        backgroundColor: commonColor.appBar,
        height: 160,
        width: '30%',
        marginLeft: 10,
        zIndex: 0,
        position: 'absolute',
        // left: '70%',
        // right: 5
    },
    verticalSliderSlide: {
        display: 'flex',
        // backgroundColor: commonColor.appBar,
        paddingTop: 4,
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: 10,
        zIndex: 1000,
    },
    activeVerticalSlide: {
        // backgroundColor: commonColor.appBar
    },
    smallImg: {
        width: 94,
        height: 130,
    },
    movieSmallHeading: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#fff',
        margin: 0,
        marginLeft: 14,
        padding: 0,
        lineHeight: 'normal'
    },
    movieSmallDetail: {
        color: '#afafaf',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'left',
        margin: 0,
        marginTop: 2,
        marginLeft: 14,
    },
    playSmallIcon: {
        // marginTop: -16,
        borderRadius: 50,
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
            color: commonColor.themeColor,
        },
    },
    smallTime: {
        color: '#afafaf',
        fontSize: 14,
        fontWeight: '400',
        margin: 0,
        marginLeft: 6,
        paddingTop: 8,
    },
    browseContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 24
    },
    brwoseHeading: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 18,
        margin: 0,
    },
    arrowIcon: {
        color: '#fff',
        fontSize: 14
    },
    arrows: {
        color: '#fff',
        fontSize: 50,
    },
    swiper_button_next: {
        margin: 0,
        width: 47,
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent',
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: '29.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    swiper_button_prev: {
        margin: 0,
        width: 47,
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent',
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: '29.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }



}));
