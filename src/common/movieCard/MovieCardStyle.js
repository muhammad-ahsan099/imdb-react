import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme)=> ({
    root: {
        width: '100%',
        height: 469,
        // [theme.breakpoints.down('md')]: {
        //     width: '15.86%',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '22%',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '40%',
        // },
        backgroundColor: commonColor.cardBg,
        textAlign: 'left',
        margin: 0,
    },
    Typography: {
        margin: 0,
        padding: 0,
        fontWeight: 400,
        fontSize: 18,
        marginTop: 6,
        color: '#fff',
        '&:hover': {
            textDecoration: 'underline'
        }
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
        marginTop: 8
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
        background: commonColor.appBar,
        '&:hover': {
            color: '#fff',
            backgroundColor: 'rgba(79, 79, 79, 1)'
        },

    },
    smallMenuScreen: {
        color: '#fff',
        },

}));