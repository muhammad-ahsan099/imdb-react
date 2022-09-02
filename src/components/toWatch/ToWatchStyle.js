import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    root: {
    },
    h1: {
        color: commonColor.themeColor,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
        fontSize: 32,
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 2%',
        },
    },
    topSpace: {
        marginTop: 20,
    },
    topSpacePadding: {
        paddingTop: 16,
    },
    swiperContainer: {
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 0px 20px 2%',
            backgroundColor : commonColor.appBar,
        },
        backgroundColor : commonColor.black,
    },
    topPicks: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 14,
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
        color: commonColor.white,
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
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '15px 0px'
    },
    contentIcon: {
        height: '70px',
        width: '70px'
    },
    contentHeading: {
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold'
    },
    contentDes: {
        color: '#fff',
        fontSize: '16px'
    },
    signInButtonDiv: {
        margin: '30px 0px'
    },
    signInButton: {
        backgroundColor: '#f5c518',
        textTransform: 'none',
    },
    nextIcon: {
        color : '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },

}))
