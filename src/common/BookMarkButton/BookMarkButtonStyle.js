import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import bookIcon from '../../assets/images/bookIcon.png'
import ActiveBookmark from '../../assets/images/activeBookmark.png';

export const useStyles = makeStyles((theme) => ({
    BtnContainer: {
        cursor: 'pointer',
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
            height: 25,
            width: 23,
            },

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
    activeWishListIcon: {
        color: '#000',
        backgroundColor: 'transparent',
        marginTop: -8,
        marginLeft: 5,
        borderRadius: 50,
        "@media(max-width: 600px)": {
            marginLeft: 1,
            fontSize: 16
        },

    },
    smallIcon: {
        marginTop: -1,
        marginLeft: 0,
    },
    loader: {
        color: '#fff',
        padding: '0px 10px'
    },
    smallLoader: {
        color: '#fff',
        padding: '0px 4px'
    },
    menuButton: {
        width: '100%',
        textTransform: 'none',
        color: 'rgb(91,136,244)',
        border: 'none',
        fontWeight: 'bold',
        background: commonColor.watchBtn,
        '&:hover': {
            color: 'rgb(91,136,244)',
            backgroundColor: 'rgba(79, 79, 79, 1)'
        },
    },
    bgButton: {
        color: 'rgb(91,136,244)',
        border: 'none',
        fontWeight: 'bold',
        background: 'rgb(235,235,235)',
        '&:hover': {
            color: 'rgb(91,136,244)',
            backgroundColor: 'rgba(235,235,235, 0.6)'
        },
    },
    btnHEight: {
        height: 50
    },
    smallBtn: {
        height: 30,
        width: 30,
    },

}))