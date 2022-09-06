import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    containerMargin : {
        margin : '30px 0px',
        "@media (max-width: 768px)": {
            margin : '0% 0%',
        },

        "@media (max-width: 600px)": {
            margin : '0% 0%',
        }
    },
    istContentDiv: {
        textAlign: 'center',
        margin: '20px 0px'
    },
    secondContentDiv: {
        borderLeft: '2px solid #ced4da',
        margin: '20px 0px',
        
        "@media (max-width: 768px)": {
            borderTop: '2px solid #ced4da',
            borderLeft: 'none'
        },

        "@media (max-width: 600px)": {
            borderTop: '2px solid #ced4da',
            borderLeft: 'none'
        }
    },
    signInButton: {
        backgroundColor: '#fff',
        textTransform: 'none',
        color: '#000000',
        border: '2px solid #dee2e6',
        width: '60%',
        margin: '5px',

        "@media (max-width: 600px)": {
            width: '90%',
            margin: '5px 2px'
        }
    },
    signInButtonHW: {
        height: '25px',
        width: '100%',
    },
    imdbIcon: {
        margin: '0px 12px'
    },
    googleIcon: {
        marginLeft: '35px'
    },
    optionDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#136cb2',
        fontWeight: 'bold'
    },
    optionIcon: {
        marginTop: '8px'
    },
    orContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftLine: {
        height: '2px',
        width: '100px',
        backgroundColor: '#adb5bd',
        margin: '5px 15px 0px 0px'
    },
    rightLine: {
        height: '2px',
        width: '100px',
        backgroundColor: '#adb5bd',
        margin: '5px 0px 0px 15px'
    },
    createAccountBtn: {
        margin: '15px 0px',
        backgroundColor: '#E4B721',

        "@media (max-width: 768px)": {
            width : '35%'
        },
        "@media (max-width: 600px)": {
            width : '80%'
        }
    },
    istDesDiv: {
        padding: '0% 20%',
        "@media (max-width: 768px)": {
            padding: '0% 18%',
        },
        "@media (max-width: 600px)": {
            padding: '0px 10px'
        }
    },
    istDesDivTxt: {
        color: '#136cb2',
        fontWeight: 'bold',
    },
    secondContentBox: {
        margin: '0px 0px 0px 30px',

        "@media (max-width: 600px)": {
            margin: '15px 20px'
        }
    },
    BoxContentDiv: {
        margin: '15px 0px'
    },
    boxHeading: {
        fontWeight: 'bold',
        fontSize: '16px'
    },
    boxDes: {
        fontSize: '14px'
    },
    historyDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: "#EDEDEC",
        borderTop: '1px solid #CCC',
    },
    historyTitle: {
        margin: '10px 30px',

        "@media (max-width: 600px)": {
            fontSize:'12px'
        }
    },
    clearTxt: {
        color: '#136cb2',

        "@media (max-width: 600px)": {
            fontSize:'12px'
        }
    }
}))