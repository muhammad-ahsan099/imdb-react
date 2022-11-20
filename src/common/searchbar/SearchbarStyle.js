import { makeStyles } from "@material-ui/core/styles";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme) =>  ({
    container: {
        // width: '100%'
    },
    root: {
        width: 'auto',
        zIndex: 1000,
        // marginTop: 10

    },
    searchContainer: {
        backgroundColor: '#fff',
        width: '58%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        border: 'none',
        padding: 1,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    outLine: {
        outline: `2px solid ${commonColor.themeColor}`,
    },
    icon: {
        paddingRight: theme.spacing(1),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'pointer'
    },
    input: {
        borderRadius: 2,
        border: 'none',
        width: '99%',
        padding: '6px',
        outline: 'none',
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
    },
    tabelHeadText: {
    },
    button: {
        background: 'linear-gradient(90deg, #824ED2 -0.14%, #B07DFF 99.93%)',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20
        }
    },
    divider: {
        width: 1,
        backgroundColor: commonColor.placeholderTextColor,
        display: 'flex',
        flexDirection: 'column',
        height: 30
    },
    commonPlaceholder: {
        paddingLeft: 15,
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#94999E',
    },
    boldPlaceHolder: {
        color: '#5B6773',
        fontWeight:  '600',
    },
    listBtn: {
        textTransform: 'none',
        color: commonColor.black,
        borderRadius: 0,
        padding: 0,
        paddingLeft: 8,
        paddingRight: 8,
        minHeight: 0,
        minWidth: 0,
        width: 'auto',
        maxWidth: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
    },
    popper: {
        backgroundColor: commonColor.appBar,
        color: '#fff',
    },

    mobileSearch: {
        height: '60px',
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none',
        backgroundColor: commonColor.appBar,   
        zIndex: 1000 ,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 5000

    },
    inputMobile: {
        borderRadius: 2,
        border: 'none',
        width: '100%',
        padding: '6px',
        outline: 'none',
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        color: '#fff',
        backgroundColor: 'transparent'
    },
    searchBtn: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 3,
    },
    searchModal: {
        backgroundColor: commonColor.cardBg,
        paddingBottom: 10,
    },
    searchDiv: {
        backgroundColor: commonColor.cardBg,
        padding: 10,
        display: 'flex',
    },
    img: {
        width: '60px',
        height: 80,
        
    },
    rightSection: {
        marginLeft: 10,
    },
    movieName: {
        margin: 0,
        color: '#fff',
        fontWeight: 'bold',
        fontSize:16,
    },
    year: {
        color: '#848484',
        margin: 0,
    },
    cardDiv : {
        width : '99%',
        display: 'flex',
        paddingLeft: 10,
        paddingTop:10,
        justifyContent: 'space-between',
        backgroundColor: commonColor.cardBg,
    },
    cardHeader : {
        position: 'relative',
        paddingRight: 4,
        backgroundColor: commonColor.cardBg,
    },
    iconDiv : {
        position:'absolute',
        bottom:'5px',
        left:'10px',
        cursor:'grab',
        display : 'flex',
        alignItems:'center'
    },
    iconTxt : {
        color : '#fff',
        margin : '15px 10px',
        fontSize : '14px'
    },
    cardTxt : {
        color : '#fff',
        fontSize : '15px'
    },
    dividerBottom: {
        marginTop: 3,
        width: '100%',
        height: 2,
        backgroundColor: commonColor.placeholderTextColor,
    },
    Link: {
        textDecoration: 'none',
    }
}))