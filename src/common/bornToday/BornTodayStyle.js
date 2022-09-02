import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    mainContainer : {
        width : '100%',
        marginTop: 20,
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 0px 0px 2%',
            backgroundColor : commonColor.appBar,
        },
        backgroundColor : commonColor.black,
    },
    bornContainer : {
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
    titleDes : {
        color : '#adb5bd',
        fontSize : '15px',
    },
    swiper: {
        width: '100%',
        padding: 0,
        margin: 0,
        paddingBottom: 16,
    },
    cardDiv : {
        // margin : '20px 0px 45px 0px',
        width: '100%',
    },
    img : {
        height : '190px',
        borderRadius:'50% 50%',
    },
    cardTxtDiv : {
        textAlign : 'center',
    },
    cardHeading : {
        fontSize : '16px',
        color : '#fff',
    },
    cardDes : {
        color : '#fff',
        fontSize : '14px',
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
    }
}))