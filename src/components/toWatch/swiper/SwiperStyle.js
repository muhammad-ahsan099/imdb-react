import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    h1: {
        color:commonColor.themeColor,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
        fontSize: 32
    },
    swiper: {
        width: '100%',
        padding: 0,
        margin: 0,
        // backgroundColor: commonColor.appBar,
    },
    swiper_slide: {
        paddingLeft: 0,
        paddingRight: 0,
        margin: 0,
    },
    innerSwiperSlide: {
        marginRight: 14
    },
    arrows: {
        color: '#fff',
        fontSize: 40,
    },
    swiper_button_next: {
        margin: 0,
        width: 47,
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent',
        backgroundColor: 'rgba(102,102,103, 0.4)',
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
        }
    },
    swiper_button_prev: {
        margin: 0,
        width: 47,
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent',
        backgroundColor: 'rgba(102,102,103, 0.4)',
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
        }
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    menuButton: {
        textTransform: 'none',
        color: '#fff',
        border: '1.5px solid #fff',
        fontWeight: 'bold',
        background: commonColor.black,
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.1)'
        },
        marginRight: 26,
        padding: '4px 95px',
        "@media (max-width: 750px)": {
            padding: '4px 55px',
        },
        "@media (max-width: 600px)": {
            padding: '4px 10px',
            width: '65%',
            marginRight: 0,
            marginBottom: 10
        },
    },
}))
