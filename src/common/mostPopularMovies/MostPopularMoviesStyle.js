import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    istContainer : {
        backgroundColor : '#f8f9fa',
    },
    istContentDiv : {
        padding: '3px 15px'
    },
    headingDiv : {
        display:'flex',
        justifyContent:'space-between',
        alignItems : 'center',
    },
    istHeading : {
        fontSize : '18px',
        display:'inline-block',
        margin:'15px 0px 8px 0px'
    },
    secondHeading : {
        fontSize : '26px',
        fontWeight:'bold',
        display:'inline-block',
    },
    secondHeadingDes : {
        fontSize : '12px',
        display:'inline-block',
        marginBottom : '10px'
    },
    buttonHeading : {
        fontSize : '14px',
        display:'inline-block',
    },
    mainContainer : {
        display:'flex',
        justifyContent:'space-between',
        alignItems : 'center',
    },
    ImportExportIcon : {
        margin:'0px 0px 0px 5px '
    },
    labelHeading : {
        fontSize : '14px',
        "@media (max-width: 768px)": {
            fontSize:'12px'
        },

        "@media (max-width: 600px)": {
            fontSize:'10px'
        }
    },
    cardsHeadingsDiv : {
        display:'flex',
        justifyContent:'space-between',
        alignItems : 'center',
    },
    cardIstHeading : {
        fontSize : '14px',
        fontWeight:'bold',
        color:'#666666',
        margin:'5px 0px 5px 60px',
        display:'inline-block',
        "@media (max-width: 768px)": {
            fontSize:'10px'
        },

        "@media (max-width: 600px)": {
            fontSize:'8px'
        }
    },
    cardSecondHeading : {
        fontSize : '14px',
        fontWeight:'bold',
        color:'#666666',
        // display:'inline-block',
        margin:'5px 25px 5px 25px',
        "@media (max-width: 768px)": {
            fontSize:'10px'
        },

        "@media (max-width: 600px)": {
            fontSize:'8px'
        }
    },
    cardHeaderDiv : {
        display:'flex',
        alignItems : 'center',
    },
    cardTitleDiv : {
        margin:'0px 0px 0px 10px'
    },
    cardTitle : {
        color : '#136CB2',
        fontSize : '14px',
    },
    cardTitleTwo : {
        color : '##666666',
        fontSize : '14px',
    },
    cardMainContainer : {
        display:'flex',
        justifyContent:'space-between',
        alignItems : 'center',
    },
    cardRatingTitle : {
        fontSize : '14px',
        fontWeight:'bold',
        display:'inline-block',
        margin:'5px 45px 5px 45px',
    },
    secondContentDiv : {
        backgroundColor : '#e9ecef',
        padding:'38px 10px',
        borderLeft: '3px solid #adb5bd',
        borderTop:'none',
        borderRight:'none',
        borderBottom:'none',
        display:'block',
        "@media (max-width: 768px)": {
            display:'none',
        },

        "@media (max-width: 600px)": {
            display:'none',
        }
    }
}))