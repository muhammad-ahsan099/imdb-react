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
    topPicks: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
    },
    line: {
        width: 4,
        height: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: commonColor.themeColor,
        borderRadius: 50,
        marginRight: 12
    },

    h3: {
        margin: 0,
        color:commonColor.white,
        fontSize: 26,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
    },
    topPicksText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        color: '#848484',
        marginTop: 10
    },
    swiper: {
        width: '100%',
        backgroundColor: commonColor.black,
        padding: 0,
        margin: 0,
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
        cursor: 'pointer'
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
        cursor: 'pointer'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    menuButton: {
        marginRight: 26,
        textTransform: 'none',
        padding: '4px 95px',
        color: '#fff',
        border: '1.5px solid #fff',
        fontWeight: 'bold',
        background: commonColor.black,
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.1)'
        },
        // [theme.breakpoints.down('sm')]: {
        //     display: 'none'
        // },
    },
}))
