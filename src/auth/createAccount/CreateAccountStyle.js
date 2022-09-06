import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
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
        height: '25px',
        margin: '5px 0px 10px 0px',
        outlineColor: '#e85d04',
        padding: '2px 0px 2px 5px'
    },
    passwordField: {
        width: '98%',
        height: '25px',
        margin: '5px 0px 0px 0px',
        outlineColor: '#e85d04',
        padding: '2px 0px 2px 5px'
    },
    passwordTxt: {
        fontSize: '13px',
    },
    btnDiv: {
        marginBottom: '20px'
    },
    btnCreateAccount: {
        backgroundColor: '#E4B721',
        textTransform: 'none',
        width: '100%'
    },
    desTxt: {
        fontSize: '14px',
    },
    signInTxt: {
        fontWeight: 'bold',
        color: '#136cb2'
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
    }
}))