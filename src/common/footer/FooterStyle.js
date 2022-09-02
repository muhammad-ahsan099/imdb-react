import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({    
    container : {
        backgroundColor : '#000000',
        width: '95%',
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
    },
    icons : {
        listStyleType:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 0px 0px 0px'
    },
    hideiconColor: {
        color : '#fff',
        cursor:'grab',
        fontSize : '16px',
        fontWeight:  '500',
        paddingLeft: 40,
        fontFamily: 'Roboto',
        "@media(max-width: 960px)": {
            display: 'none'
        },


    },
    iconColor : {
        color : '#fff',
        // margin : '20px 20px',
        // margin : '0px 15px',
        marginRight: 30,
        cursor:'grab',
        fontSize : '16px',
        fontWeight:  '500',
        fontFamily: 'Roboto-SemiBold'
    },
    list : {
        listStyleType:'none',
        display:'inline-block',
        // display: 'inline',
        justifyContent:'center',
        alignItems:'center',
    },
    listIcon : {
        fontSize : '12px'
    },
    imgMargin : {
        marginLeft:'5px',
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
