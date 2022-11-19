import { makeStyles } from "@material-ui/core";
import TwoS from '../../assets/movies/2s.jpg'


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
        marginTop: 20
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
        fontSize : '14px',
        fontWeight: 'bolder',
        display:'inline-block',
        marginBottom : '10px',
        color: '#848484'
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
    poster: {
        // backgroundImage: `url(${TwoS})`,
        width: '100px',
        height: '143px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
    },

    rightContainer: {
        marginLeft: 14,
        width: '78%',
        "@media (max-width: 500px)": {
            marginLeft: 0,
            width: '100%',
            marginTop: 10,
        },
    },

    head:{
        color: 'rgb(22,94,184)',
        fontSize: 18,
        fontWeight: '400',
        margin: 0,
    },
    movieText: {
        color: '#848484',
        fontSize: 12,
    },

    metaScoreDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    metascore: {
        padding: '2px 2px',
        backgroundColor: '#12b71e',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },
    metascoreText :{
        fontWeight: 'normal',
        fontSize: 10,
        paddingLeft: 10,
        color: 'rgb(91,136,244)',
    },

    cardContainer: {
        display:'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '30px',
        height: '30px',
        // "@media (max-width: 768px)": {
        //     width: '44%',
        // },

    },
   
    ratingContainer: {
        display:'flex',
        alignItems : 'center',
        // justifyContent: 'center',
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
        alignItems : 'flex-start',
        "@media (max-width: 500px)": {
            flexDirection: 'column'
        },

    },
   
    bookMark:{
        margin:'5px 30px 5px 25px',
    },
    iconStar: {
        color: 'rgb(241, 202, 70)',
        fontSize: 14,

    },
    iconBlueStar: {
        color: 'rgb(102, 108, 241)',
        fontSize: 14,
    },
    cardRatingTitle: {
        fontSize: 13,
        fontWeight: '400',
        marginRight: 10
    },
    detail: {
        marginTop: 6,
        fontSize: 14,
    },

}))
