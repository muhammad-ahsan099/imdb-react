import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({    
    container : {
        width : '100%',
        textAlign: 'center',
    },
    icons : {
        margin:'18px',
        cursor:'grab'
    },
    listContainer : {
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 800px)": {
            padding: '0px 2% 0px 2%',
            display:'inline-block',
            margin: '0px auto',
        },

    },
    listDiv: {
        margin: '0px 13px',
        color: '#fff',
        fontSize : '15px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor:'grab',
        flexWrap: 'wrap'
    },
    linkTag : {
        textDecoration:'none',
        color:'#fff'
    },
    imgMargin : {
        marginLeft:'5px',
        height : '10px'
    },
    amazonTxt : {
        fontWeight : 'bold',
    },
    headingOne : {
        color : '#fff',
        fontSize : '16px',
        padding : '10px 0px',
        textAlign : 'center',
    },
    hidden: {
        display: 'none'
    },
    headingTwo : {
        color : '#adb5bd',
        fontSize : '12px',
        textAlign : 'center',
    }
}))
