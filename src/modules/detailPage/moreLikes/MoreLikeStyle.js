import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";
export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 30,
        width: '58%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    topPicks: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 14,
    },
    topPicksText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        color: '#848484',
        marginTop: 10
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
        color: commonColor.black,
        fontSize: 32,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
    },
    swiper: {
        width: '100%',
        padding: 0,
        margin: 0,
        marginTop: 20,
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
