import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        zIndex: 1000,
    },
    menuList: {
        backgroundColor: commonColor.menuColor,
        paddingTop: 10,
        color: commonColor.white,
        borderRadius: 4
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
    listBtn: {
        color: '#848484',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 600px)": {
            display: 'none',
        },
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },

    },
}));