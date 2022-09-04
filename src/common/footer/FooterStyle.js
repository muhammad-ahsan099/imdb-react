import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({    
    container : {
        width : '100%',
    },
    icons : {
        margin:'18px',
        cursor:'grab'
    },
    listContainer : {
        display: 'flex',
        justifyContent: 'center'
    },
    listDiv: {
        margin: '0px 13px',
        color: '#fff',
        fontSize : '15px',
        display: 'flex',
        alignItems: 'center',
        cursor:'grab',
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
    headingTwo : {
        color : '#adb5bd',
        fontSize : '12px',
        paddingBottom : '20px',
        textAlign : 'center',
    }
}))
