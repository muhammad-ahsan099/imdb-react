import { makeStyles } from "@material-ui/core";
import Two from '../../../assets/movies/2.jpg'
import TwoS from '../../../assets/movies/2s.jpg'
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        padding: '0px 4%',
        minHeight: 550,
    },
    swiper: {
        width: '100%',
        height: 550,
        padding: 0,
    },
    swiper_slide: {
        backgroundImage: `url(${Two})`,
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
        // backgroundColor: 'pink'

    },
    inner_poster: {
        backgroundImage: `url(${TwoS})`,
        width: '200px',
        height: '225px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'orange',
        display: 'flex',
        alignItems: 'flex-start'
    },
    wishListIcon: {
        // color: 'rgba(24,24,24, 0.5)', 
        // color:'orange',
        // fill: 'yellow',
        stroke: '#fff',
        color: '#fff',
        height: 58, 
        width: 43,
        marginTop: -8,
        marginLeft: -4,
        borderRadius: 0,
        // backgroundColor: 'pink'
    },
    bottomMiddleSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    bottomRightSection: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
    },
    playIcon: {
        marginTop: -16,
        borderRadius: 50,
        color: '#fff',
        fontWeight: '400',
        '&:hover': {
            color: commonColor.themeColor,
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
        lineHeight: 'normal'
    },
    movieDetail: {
        color: '#afafaf',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'left',
        margin: 0,
        marginLeft: 14,
    },
    time: {
        color: '#afafaf',
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 30
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
        backgroundColor: 'black',
    },
    verticalSliderSlide: {
        display: 'flex',
        backgroundColor: commonColor.appBar,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: 10,
    },
    activeVerticalSlide: {
        backgroundColor: commonColor.appBar
    },
    smallImg: {
        width: 90,
        height: 140,
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
        backgroundColor: '#666667',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: '29.5%',
        zIndex: 1000,
        cursor: 'pointer'
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
        cursor: 'pointer'
    }



}));
