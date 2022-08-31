import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        zIndex: 1000,
    },
    menuList: {
        width:200,
        backgroundColor: commonColor.menuColor,
        paddingTop: 10,
        color: commonColor.white,
        borderRadius: 4
    },
    typography: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(3),
        paddingTop: 12,
        paddingBottom: 12,
        fontWeight: '500'
    },
    Popper: {
        marginTop: 10,
        marginLeft: -2
    },
    listBtn: {
        textTransform: 'none',
        color: commonColor.black,
        borderRadius: 0,
        padding: 0,
        paddingLeft: 8,
        minHeight: 0,
        minWidth: 0,
        width: 'auto',
        maxWidth: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
    },
    iconsList:{
        minWidth: 30,
    }
}));