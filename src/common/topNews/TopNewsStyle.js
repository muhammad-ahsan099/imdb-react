import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    mainContainer : {
        width : '100%',
        marginTop: 20,
        padding: '0px 4%',
        backgroundColor : commonColor.black,
        "@media (max-width: 960px)": {
            backgroundColor : commonColor.appBar,
            padding: '0px 0px 0px 2%',
        },
    },
    newsContainer : {
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
    cardDiv : {
        display:'flex',
        width : '100%',
    },
    desDiv : {
        marginLeft : '12px'
    },
    cardDes : {
        color : '#fff',
        fontSize : '14px'
    },
    cardAuth : {
        fontSize : '12px',
        color : '#fff'
    },
    buttonDiv : {
        margin : '10px 5px',
        paddingBottom: 20,
        // overflowX: 'scroll',
        // whiteSpace: 'nowrap',
        // minWidth: '100%',
    },
    buttons : {
        color : '#e9ecef',
        textTransform: 'none',
        borderColor : '#6c757d',
        borderRadius : '50px 50px',
        margin : '0px 4px',
        marginBottom: 10,
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