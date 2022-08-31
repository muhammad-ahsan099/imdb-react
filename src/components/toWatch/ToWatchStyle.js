import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    h1: {
        color:commonColor.themeColor,
        textAlign: 'left',
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
        fontSize: 32
    },
    topSpace: {
        paddingTop:  50,
    }
}))