import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(()=>({
    istContainer : {
        padding:'20px 12% 100px 12%',
        istContainer : {
            padding:'20px 12% 100px 12%',
            "@media (max-width: 768px)": {
                padding : '20px 4% 50px 4%'
            },
            "@media (max-width: 600px)": {
                padding : '20px 2% 50px 2%'
            }
        },
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
        backgroundColor: 'rgb(245,245,246)',
        padding : '10px',
        margin : '10px 0px',
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    desc: {
        backgroundColor: 'rgb(245,245,246)',
        padding : '10px',
        marginBottom: 20
    },
    cardDiv : {
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
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
    bioText: {
        margin: 0,
        fontSize : '26px',
        fontWeight : '400'
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

    overview: {
        fontSize: 16,
        fontWeight: 'bolder',
        color: 'rgb(102,102,102)',
    },
    overviewDiv: {
        display: 'flex',
        margin: '10px 0px 0px 14px',

    },
    born: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgb(102,102,102)',
        width: 100,
        margin: 0,
    },
    bornPlace: {
        color: 'rgb(51,51,51)',
        fontSize: 14,
        margin: 0
    },
    bornPlaceText: {
        color: 'rgb(37,102,186)',
        fontSize: 14,
        margin: 0
    },
    loader: {
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))