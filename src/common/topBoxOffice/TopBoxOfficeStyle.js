import { makeStyles } from "@material-ui/core"
import { commonColor } from "../../constants/colors"
import bookIcon from '../../assets/images/bookIcon.png'
import ActiveBookmark from '../../assets/images/activeBookmark.png';

export const useStyles = makeStyles((theme) => ({
  mainContainer : {
        width : '100%',
        padding: '0px 4%',
        backgroundColor : commonColor.black,
        "@media (max-width: 960px)": {
            backgroundColor : commonColor.appBar,
            padding: '0px 2%',
        },
        // margin : 'auto',
    },
    officeContainer : {
        display:'flex',
        alignItems:'center',
    },
    sideLine : {
        height : '34px',
        width : '4px',
        backgroundColor : '#ffbe0b',
    },
    heading : {
        color:'#fff',
        marginLeft : '5px'
    },
    headingIcon : {
        marginLeft:'6px'
    },
    titleDes : {
        color : '#adb5bd',
        fontSize : '15px',
    },
    cardContainer : {
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center',
        marginBottom : '50px',
        "@media(max-width: 480px)": {
            marginTop: 20
        },

    },
    cardDiv : {
        display:'flex',
        alignItems:'center',
        width:'49%',
        "@media(max-width: 480px)": {
            width: '100%',
        },
    },
    cardHeader : {
        display: 'flex',
        alignItems:'center',
    },
    headerSrNo : {
        color: '#fff'
    },
    headerSideLine : {
        height: '20px',
        width: '2px',
        backgroundColor: '#ffbe0b',
        margin:'0px 5px'
    },
    headerIcon : {
        height : '70px',
        width : '70px',
        marginTop:'10px',
        "@media(max-width: 480px)": {
            marginTop:'0px',
            marginLeft: -10,
            marginRight: -10
        },
    },
    cardFooter : {
        // backgroundColor:'#08090a',
        width:'100%',
        padding:'8px 20px',
        // "&>*:nth-child(1)": {
        //     backgroundColor:'orange',
        // },
        "@media(max-width: 480px)": {
            padding:'4px 0px',
        },
    },
    footerHeading : {
        color : '#fff',
        fontSize : '16px'
    },
    footerDes : {
        color:'#adb5bd',
        fontSize:'13px'
    },
    iconContainer: {
        backgroundImage: `url(${bookIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 45,
        width: 43,
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 600px)": {
            height: 25,
            width: 23,
        },

    },
    wishListIcon: {
        color: '#fff',
        backgroundColor: 'transparent',
        marginTop: -8,
        marginLeft: 5,
        borderRadius: 50,
        "@media(max-width: 600px)": {
            marginLeft: 1,
            fontSize: 16
        },
    },
    iconActiveContainer: {
        backgroundImage: `url(${ActiveBookmark})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: 45,
        width: 43,
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 600px)": {
            // marginTop: '0px',
            // marginLeft: -15,
            // marginRight: -11,
            height: 25,
            width: 23,
            },
    },
}))