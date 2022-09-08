import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";

export const useStyles = makeStyles ((theme) => ({
    mainContainer : {
        width : '100%',
        backgroundColor : commonColor.white,
        padding: '0px 5%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 1%',
        },        
    },
    watchContainer : {
        display:'flex',
        alignItems:'center',
    },
    sideLine : {
        height : '34px',
        width : '4px',
        backgroundColor : '#ffbe0b',
    },
    heading : {
        color:'#000',
        marginLeft : '5px',
        marginRight: 16,
        fontSize: 32,
    },
    titleDes : {
        color : '#adb5bd',
        fontSize : '15px',
    },
    watchButtonsDiv : {
        display : 'flex',
        margin : '15px 0px 50px 0px'
    },
    watchButton : {
        backgroundColor : '#000000',
        textTransform: 'none',
        color : '#fff',
        borderColor : '#fff',
        width : '270px',
        margin : '0px 25px 0px 0px'
    },
    mainWatchTxt : {
        fontSize : '30px',
        color : '#ffbe0b'
    },
    cardDiv : {
        width : '99%',
        margin : '20px 0px 35px 0px' 
    },
    cardHeader : {
        position: 'relative'
    },
    iconDiv : {
        position:'absolute',
        bottom:'5px',
        left:'10px',
        cursor:'grab',
        display : 'flex',
        alignItems:'center'
    },
    iconTxt : {
        color : '#fff',
        margin : '15px 10px',
        fontSize : '14px'
    },
    cardTxt : {
        color : '#000',
        fontSize : '16px'
    },
    arrows: {
        color: '#fff',
        fontSize: 50,
    },
    swiper_button_next: {
        margin: 0,
        width: 47, 
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent', 
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: '29.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },

      },
    swiper_button_prev: {
        margin: 0,
        width: 47, 
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent', 
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: '29.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}))
