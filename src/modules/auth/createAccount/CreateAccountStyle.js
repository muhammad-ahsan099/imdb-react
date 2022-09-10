import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: '#fff',
        marginBottom: -20,
    },
    imgContainer: {
        textAlign: 'center',
        margin: '12px 0px',
    },
    img: {
        height: '50px',
        width: '100px'
    },
    cardDiv: {
        padding: '0px 20px',
        border: '1px solid #ddd'
    },
    heading: {
        fontSize: '26px',
    },
    labelTxt: {
        fontWeight: 'bold',
        fontSize: '14px'
    },
    inputsFields: {
        width: '98%',
        height: '24px',
        margin: '5px 0px 10px 0px',
        padding: '2px 0px 2px 5px',
        outlineColor: 'rgb(249,205,163)',
        border: '1.2px solid rgb(162,162,162)',
        borderRadius: 4
    },
    passwordField: {
        width: '98%',
        height: '24px',
        margin: '5px 0px 0px 0px',
        outlineColor: 'rgb(249,205,163)',
        padding: '2px 0px 2px 5px',
        border: '1.2px solid rgb(162,162,162)',
        borderRadius: 4
    },
    passwordTxt: {
        fontSize: '12px',
        fontWeight: '500',
        marginTop: 3
    },
    btnDiv: {
        marginBottom: '20px',
        marginTop: '50px'
    },
    btnCreateAccount: {
        background: 'linear-gradient(to bottom,#f7dfa5,#f0c14b)',
        textTransform: 'none',
        fontSize:14,
        fontWeight: '500',
        border: '1.2px solid rgb(162,162,162)',
        width: '100%',
        '&: hover': {
            background: '#f0c14b',
        }
    },
    desTxt: {
        fontSize: '14px',
    },
    signInTxt: {
        fontWeight: 'bold',
        color: '#136cb2',
        textDecoration: 'none',
    },
    link: {
        textDecoration: 'none'
    },
    lastContainer: {
        textAlign: 'center',
    },
    lastContainerTxt: {
        color: '#136cb2',
        fontSize: '12px',
        margin: '0px 10px'
    },
    lastContainerDes: {
        fontSize: '12px',
    },
    infoDiv: {
        display: 'flex',
        aligItems:'center',
        marginLeft: -8
    },
    errorContainer: {
        border: `1px solid ${commonColor.error}`,
        borderRadius: 4,
        padding: '10px 20px',
        paddingBottom: 20,
        display: 'flex',
        marginBottom: 14
    },
    errIcon: {
        color: 'rgb(211,0,0)',
        fontSize: 30,
    },
    rightDiv: {
        paddingLeft: 14,
    },
    errHead: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgb(211,0,0)',
    },
    marginDiv: {
        marginTop: 8
    },
    error: {
        fontSize: 12,
        fontWeight: 400,
        color: '#000',
    }
}))