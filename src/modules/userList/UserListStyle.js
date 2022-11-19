import { makeStyles } from "@material-ui/core";
import TwoS from '../../assets/movies/2s.jpg'
import { commonColor } from "../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    istContainer : {
        backgroundColor : '#f8f9fa',
    },
    istContentDiv : {
        padding: '3px 15px'
    },
    headingDiv : {
        display:'flex',
        justifyContent:'flex-end',
        alignItems : 'center',
        margin: '20px 9px'
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
        backgroundImage: `url(${TwoS})`,
        width: '60px',
        height: '80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-start',
    },

    rightContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 14,
        width: '100%',
        "@media (max-width: 500px)": {
            marginLeft: 0,
            width: '100%',
            marginTop: 10,
        },
    },

    head:{
        color: 'rgb(22,94,184)',
        fontSize: 14,
        fontWeight: '400',
        margin: 0,
    },
    movieText: {
        color: '#000',
        fontSize: 13,
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
        fontSize: 18,

    },
    iconBlueStar: {
        color: 'rgb(102, 108, 241)',
        fontSize: 18,
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
    searchContainer: {
        backgroundColor: 'rgb(234,214,82)',
        width: '90%',
        margin: '60px 5% 30px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',

    },
    searchText: {
        fontSize: 15,
        fontWeight: '600',
        color: commonColor.cardBg,
    },
    searchBar: {
        width: '50%',
        backgroundColor:'#fff',
        display: 'flex',
        alignItems: 'center',
        height: 24,


    },
    search: { 
        width: '90%',
        padding: '4px 10px',
        outline: 'none',
        border: 'none',
    },

}))
