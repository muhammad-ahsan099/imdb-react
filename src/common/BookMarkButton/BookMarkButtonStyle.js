import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import bookIcon from '../../assets/images/bookIcon.png'
import ActiveBookmark from '../../assets/images/activeBookmark.png';

export const useStyles = makeStyles((theme) => ({
    BtnContainer: {
        // backgroundColor: 'pink',
        cursor: 'pointer',
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

}))