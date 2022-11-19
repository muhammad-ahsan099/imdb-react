import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(()=>({
    istContainer : {
        padding:'20px'
    },
    istContainerDiv : {
        border : '1px solid #CCC',
        padding:'0px 15px',
    },
    headingDiv : {
        display:'flex',
        alignItems:'center',
        margin : '10px 0px'
    },
    sideLine : {
        height:'15px',
        width : "2px",
        backgroundColor : '#CCC',
        margin:'0px 5px'
    },
    headingDivTxt : {
        fontSize : '14px',
    },
    headingDivTitle : {
        color : '#136CB2',
        fontSize : '14px'
    },
    cardContainer : {
        backgroundColor : '#e9ecef',
        padding : '10px',
        margin : '10px 0px',
    },
    cardDiv : {
        display : 'flex',
        "@media (max-width: 768px)": {
            display : 'flex',
            flexDirection : 'row'
        },

        "@media (max-width: 500px)": {
            display : 'flex',
            flexDirection : 'column',
            justifyContent: 'center'
        }
    },
    contentContainer : {
        margin : '5px 0px 5px 15px',
        "@media (max-width: 768px)": {
            margin : '5px'
        },

        "@media (max-width: 600px)": {
            margin : '5px'
        }
    },
    cardMainHeading : {
        color : '#136CB2',
        fontSize : '18px',
        fontWeight : 'bold'
    },
    imgDiv : {
        width : '75%',
        "@media (max-width: 768px)": {
            width : '100%'
        },

        "@media (max-width: 600px)": {
            width : '100%'
        }
    },
    cardDes : {
        fontSize : '13px',
        textAlign : 'justify',
    },
    secondContainer : {
        display : 'block',
        "@media (max-width: 768px)": {
            display : 'none',
        },

        "@media (max-width: 600px)": {
            display : 'none',
        }
    },
    secondImgDiv : {
        margin : '0px 0px 0px 15px',
    },
}))