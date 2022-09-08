import { commonColor } from "../../constants/colors";
import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    mainContainer : {
        width : '100%',
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 0px 0px 2%',
            backgroundColor : commonColor.appBar,
        },
        backgroundColor : commonColor.black,
    },
    soonContainer : {
        display:'flex',
        alignItems:'center',
    },
    sideLine : {
        height : '34px',
        width : '4px',
        backgroundColor : '#ffbe0b',
    },
    heading : {
        color:'#fff',
        marginLeft : '5px'
    },
    headingIcon : {
        marginLeft:'6px'
    },
    swiper: {
        // backgroundColor: commonColor.appBar,
        padding: 0,
        margin: 0,
    },
    titleDes : {
        color : '#adb5bd',
        fontSize : '15px',
    },
    cardDiv : {
        width : '99%',
        margin : '15px 0px'
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
        alignItems:'center',
    },
    iconTxt : {
        color : '#fff',
        margin : '15px 10px',
        fontSize : '14px'
    },
    cardFooter : {
        display : 'flex',
        alignItems: 'flex-end',
    },
    footerDesDiv : {
        marginTop : '10px',
        paddingBottom: 3
    },
    cardYear : {
        color : '#adb5bd',
        fontSize : '12px',
        fontWeight: 'bold',
    },
    cardTxt : {
        color : '#fff',
        fontSize : '16px',
        fontWeight: '600'
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
        top: '25.5%',
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
        top: '25.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    imgContainer: {
        width: '100%', 
        height: '240px'
    },
    mainImg: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',

    }
}))
