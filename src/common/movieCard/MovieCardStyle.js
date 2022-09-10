import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import bookIcon from '../../assets/images/bookIcon.png'
import ActiveBookmark from '../../assets/images/activeBookmark.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // height: 459,
        borderRadius: 0,
        // [theme.breakpoints.down('xs')]: {
        //     height: 400,
        // },
        backgroundColor: commonColor.cardBg,
        textAlign: 'left',
        margin: 0,
    },
    bgWhite:{
        backgroundColor: commonColor.white,
    },
    Typography: {
        margin: 0,
        padding: 0,
        fontWeight: 500,
        fontSize: 17,
        marginTop: 6,
        color: '#fff',
        '&:hover': {
            textDecoration: 'underline'
        },
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        height:50
    },
    colorBlack: {
        color: commonColor.black
    },
    fillIcon: {
        color: commonColor.themeColor,
    },
    topSection: {
        display: 'flex',
    },
    rating: {
        display: 'flex',
        marginRight: 24
    },
    ratingText: {
        margin: 0,
        color: '#848484'
    },
    cardAction: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: -10
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
    menuText: {
        margin: 0,
        padding: 0,
        color: '#ffffff',
    },
    bottomSection: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    hideInfoBtn: {
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },
    trailerButton: {
        width: '45%',
        height: 36,
        textTransform: 'none',
        color: '#848484',
        fontWeight: '600',
        border: 'none',
        margin: 0,
        padding: 0,
        paddingTop: 0,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 0,
        '&:hover': {
            color: '#fff',
            backgroundColor: 'rgba(79, 79, 79, 1)'
        },

    },
    bgTrailerButton: {
        '&:hover': {
            color: 'rgb(91,136,244)',
            backgroundColor: 'rgba(235,235,235, 0.6)'
        },

    },
    smallMenuScreen: {
        color: '#fff',
    },
    iconTopContainer: {
        position: 'absolute',
        height: 45,
        width: 40,
        display: 'inline-block'
    },
}));