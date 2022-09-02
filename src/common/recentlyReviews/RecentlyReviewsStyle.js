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
        margin : '30px 0px'
    },
    signInButton : {
        backgroundColor : '#f5c518',
        textTransform: 'none',
    }

}))