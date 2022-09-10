import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '0px 4%',
        backgroundColor: '#000',
    },
    h1: {
        color: '#fff',
        fontSize: '42px',
        fontWeight: '500',
        marginBottom: 30,
    },
    appBar: {
        backgroundColor: '#000',
    },
    tabs: {
        //   width: 900,  
    },
    gridContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    },
    tabsDiv: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tabContainer: {
        padding: '0px 16px'
    },
    tab: {
        color: commonColor.white,
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 32,
        fontFamily: 'Roboto-SemiBold'
    },
    labelColor: {
        color: commonColor.themeColor
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 0px',
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
        '&:hover': {
            backgroundColor: '#f5c518',
        },
        textTransform: 'none',
    },
    spinnerContainer: {
        height: 200,
        margin: '0px 100px',
        textAlign: 'center',
        width: '100%',
        flexDirection: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));