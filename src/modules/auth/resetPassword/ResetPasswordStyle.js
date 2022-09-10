import { makeStyles } from "@material-ui/core";

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
        marginTop: 30,
        marginBottom: 8,
        fontSize: '26px',
        margin: 0,
        fontWeight: '600',
    },
    innerHead: {
        margin: 0,
        fontSize: 13,
        marginBottom: 20,
        fontWeight: '400'
    },
    labelTxt: {
        fontWeight: 'bold',
        fontSize: '14px'
    },
    inputsFields: {
        width: '98%',
        height: '24px',
        margin: '6px 0px 0px 0px',
        outlineColor: 'rgb(249,205,163)',
        // outlineColor: 'rgb(243,116,0)',
        outlineOffset: 1,
        padding: '2px 0px 2px 5px',
        borderRadius: 4,
        border: '1.2px solid rgb(162,162,162)',
    },
    errorField: {
        width: '98%',
        height: '24px',
        margin: '6px 0px 0px 0px',
        outline: 'none',
        padding: '2px 0px 2px 5px',
        borderRadius: 4,
        border: '1.2px solid rgb(211,0,0)',
    },
    errorContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 3
    },
    error: {
        color: 'rgb(211,0,0)',
        fontSize: 12,
        fontWeight: 400,
    },
    link: {
        textDecoration: 'none'
    },
    passwordLabelDiv: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'space-between',
    },
    forgotlabel: {
        fontWeight: '400',
        fontSize: '13px',
        color: 'rgb(42,95,202)'
    },
    btnDiv: {
        marginTop: 24,
        marginBottom: '20px'
    },
    btnSignIn: {
        background: 'linear-gradient(to bottom,#f7dfa5,#f0c14b)',
        border: '1.2px solid rgb(162,162,162)',
        textTransform: 'none',
        width: '100%',
        height: 32,
        '&:hover': {
            background: '#f0c14b',
        }
    },
    desTxt: {
        fontSize: '14px',
    },
    detailsTxt: {
        fontWeight: 'bold',
        color: '#136cb2'
    },
    orContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px'
    },
    newToTxt: {
        fontSize: '13px',
        textAlign :'center',
    },
    leftLine: {
        height: '2px',
        width: '90px',
        backgroundColor: '#adb5bd',
        margin: '5px 15px 0px 0px'
    },
    rightLine: {
        height: '2px',
        width: '90px',
        backgroundColor: '#adb5bd',
        margin: '5px 0px 0px 15px'
    },
    btnCreateAccount: {
        textTransform: 'none',
        width: '100%',
        height: 32,
        border: '1.2px solid rgb(162,162,162)',
        background: 'linear-gradient(to bottom,#f7f8fa,#e7e9ec)'
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
    bottomContainer: {
        margin: '0px 0px 40px 0px',
    },
    bottomHead: {
        fontWeight: '500',
        margin: 0,
        marginTop: 24,
        color: 'rgb(17,17,17)',

    },
    dotsContainer :{
        display: 'flex',
        alignItems: 'flex-start',
        margin: '8px 0px',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        backgroundColor: '#848484',
        marginTop: 6
    },
    list: {
        fontSize: 12,
        fontWeight: 'normal',
        margin: 0,
        paddingLeft: 8,
        marginLeft: 4,
    },
}))