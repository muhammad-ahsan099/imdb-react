import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    h1: {
        color:commonColor.themeColor,
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
        paddingTop:  50,
    }
}))