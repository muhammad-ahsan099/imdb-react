import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";
import imdbProBG from '../../../assets/images/imdbProBG.png'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        zIndex: 1000,
    },
    menuList: {
        marginTop: 6,
        backgroundImage: `url(${imdbProBG})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    containerInner: {
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "flex-start",
        padding: '16px 10px',
    },
    menuText: {
        margin: 0,
        color: '#ffffff',
    },
    smallBtnScreen: {
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    typography: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(3),
        paddingTop: 12,
        paddingBottom: 12,
        fontWeight: '500'
    },
    proButton: {
        marginLeft: 6,
        marginRight: 6,
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: 'none',
        color: '#848484',
        border: 'none',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },
    },
    freebutton: {
        padding: '4px 36px',
        textTransform: 'none',
        color: '#000',
        border: 'none',
        backgroundColor: commonColor.themeColor,
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '400'
    },
    h5: {
        margin: 0,
        color: '#fff',
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Roboto-SemiBold',
        marginBottom: 6
    },
    ul: {
        margin: 0 , 
        textAlign: 'left',
        color: '#fff'
    },
    li: {
        padding: '4px 0px',
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'Roboto-SemiBold'
    }
}));