import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    mainContainer : {
        width : '100%',
        // backgroundColor : commonColor.appBar,
        marginTop: 20,
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 0px 0px 2%',
        },
    },
    recentTitle : {
        color : '#fff',
        fontWeight : 'bold',
        margin : '14px 0px',
        fontSize: 26,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',


    },
    lastTitle : {
        color : '#fff',
        fontSize : '15px'
    },
    signInButtonDiv : {
        textAlign : 'center',
        margin : '30px 0px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    signInButtonDivTwo : {
        textAlign : 'center',
        margin : '30px 0px 10px 0px',
        backgroundColor: commonColor.appBar,
        padding: '14px 0px',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    signInButton : {
        backgroundColor : '#f5c518',
        textTransform: 'none',
    },
    signInButtonSmallDiv: {
        backgroundColor: 'rgba(18, 18, 18, 0.7)',
        padding: '8px 0px',
        textAlign : 'center',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    siginInSmall: {
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
    aTag: {
        margin: 0,
        padding: 0,
        textDecoration: 'none'
    }


}))