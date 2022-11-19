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
    cardContainer: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '35%',
        marginRight: 20,
        "@media (max-width: 768px)": {
            width: '44%',
        },

    },
    cardSecondHeading : {
        fontSize : '14px',
        fontWeight:'bold',
        color:'#666666',
        // display:'inline-block',
        // margin:'5px 25px 5px 25px',
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
    ratingContainer: {
        display:'flex',
        alignItems : 'center',
        justifyContent: 'center',
        // margin:'5px 70px 5px 0px',
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
        // margin:'5px 30px 5px 25px',
        // margin:'5px 45px 5px 5px',
    },
    bookMark:{
        margin:'5px 30px 5px 25px',
    },
    secondContentDiv : {
        backgroundColor : '#e9ecef',
        padding:'38px 10px',
        height: 400,
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
    },
    iconStar: {
        color: 'rgb(241, 202, 70)',
        fontSize: 26,
        "@media (max-width: 668px)": {
            fontSize:'16px'
        },
    },
    iconBlueStar: {
        color: 'rgb(102, 108, 241)',
        fontSize: 26,
        "@media (max-width: 668px)": {
            fontSize:'16px'
        },
    },
    seenMovies: {
        fontSize: 18,
        fontWeight: '400',
    },
    seenText: {
        fontSize: 30,
        fontWeight: 'bold',

    },
}))