import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        zIndex: 1000,
    },
    menuList: {
        backgroundColor: commonColor.menuColor,
        paddingBottom: 10,
        paddingTop: 10,
        color: commonColor.white,
        borderRadius: 4,

    },
    formControlOne: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    labelRadioGroupOne: {
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
        fontSize: 18
    },
    label: {
        fontFamily: 'Roboto-SemiBold',
        fontWeight: 'bold',
    },
    typography: {
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '800'
    },
    label1: {
        color: '#fff',
        textAlign: 'left',
        borderBottom: `1px solid ${commonColor.placeholderTextColor}`,
        paddingBottom: 12,
        fontWeight: '700',
        fontSize: 12,
        color: commonColor.white,
        letterSpacing: 2,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    label2: {
        color: '#fff',
        textAlign: 'left',
        borderBottom: `1px solid ${commonColor.placeholderTextColor}`,
        borderTop: `1px solid ${commonColor.placeholderTextColor}`,
        padding: '12px 0px',
        letterSpacing: 2,
        fontFamily: 'Roboto-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: commonColor.white,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        
    },
    RadioGroupOne: {
        marginTop: '-15px',
        marginBottom: '-15px',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    RadioGroupTwo: {
        marginTop: '-12px',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    radio :{
        color: commonColor.white,
        '&$checked': {
            color: commonColor.themeColor
          }
      
    },
    checked: {
     
    },
    listBtn: {
        color: commonColor.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },

    },
}));