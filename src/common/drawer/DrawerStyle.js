import { makeStyles } from '@material-ui/core/styles';
import { commonColor } from '../../constants/colors';
import imgBG from '../../assets/images/imgBG.jpg'

const drawerWidth = '100%';
const mobileDrawerWidth = 280

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: commonColor.appBar,
        height: 54,
        width: '100%',
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 1%',
        },
        "@media (max-width: 600px)": {
            padding: '0px 0px',
        },
    },
    logoDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse'
        },
    },
    menuButton: {
        marginLeft: 6,
        marginRight: 6,
        paddingTop: 6,
        paddingBottom: 6,
        textTransform: 'none',
        color: '#848484',
        border: 'none',
        fontWeight: 'bold',
        background: commonColor.appBar,

        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },

        // [theme.breakpoints.up('md')]: {
        //     display: 'none',
        // },

    },
    signInButton: {
        marginLeft: 6,
        marginRight: 6,
        paddingTop: 6,
        paddingBottom: 6,
        textTransform: 'none',
        color: '#fff',
        border: 'none',
        fontWeight: 'bold',
        background: commonColor.appBar,
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },
    },
    link: {
        textDecoration: 'none',
    },
    smallMenuScreen: {
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },

    },
    menuText: {
        margin: 0,
        padding: 0,
        color: '#ffffff',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    drawer: {
        width: mobileDrawerWidth,
        backgroundColor: commonColor.appBar,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: '#000'
        },
    },
    drawerWeb: {
        width: drawerWidth,
        backgroundColor: commonColor.appBar,
        height: '100vh',
        // textAlign: 'center',
        // justifyContent: 'center',
        padding: '0px 4%',
    },
    drawerPaper: {
        width: mobileDrawerWidth,
        backgroundColor: commonColor.appBar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: '100%'
    },
    list: {
        backgroundColor: commonColor.appBar,
    },
    headingContainer: {
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    h2: {
        color: commonColor.white,
        marginLeft: 13,
        [theme.breakpoints.down('sm')]: {
            marginLeft: -18,
            fontSize: 16,
            fontWeight: 500,
        },
    },
    h2Active: {
        color: commonColor.themeColor,
        marginLeft: -18,
        fontSize: 16,
        fontWeight: 500,
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(5, 1),
        ...theme.mixins.toolbar,
        [theme.breakpoints.down('sm')]: {
            padding: 20
        },
    },
    listItemText: {
        marginLeft: '15px',
        fontSize: '25px !important',
        fontWeight: '500',
        color: '#5B6773',
        fontFamily: 'Poppins-Medium !important'

    },

    RouterLink: {
        display: 'flex',
        textDecoration: 'none',
    },
    appBar: {
        zIndex: `${theme.zIndex.drawer + 1}!important`,
        backgroundColor: commonColor.appBar,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        height: 54
    },
    Toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    badge: {
        marginLeft: 16,
        marginRight: 8,
        paddingLeft: 2,
        paddingRight: 2,
        color: commonColor.black
    },
    colorPrimary: {
        backgroundColor: commonColor.themeColor,
        color: commonColor.black,
        fontWeight: '400s'
    },
    crossIcon: {
        backgroundColor: commonColor.themeColor,
        color: commonColor.black,
        '&:hover': {
            backgroundColor: commonColor.themeColor,
        },
    },
    mainLogo: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: 8,
        },
    },
    logoImg: {
        width: '100px',
        height: '100px'
    },
    linkDiv: {
        width: '33.33%',
        // flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },

    },
    linkTag: {
        margin: 0,
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        paddingBottom: '14px',
        listStyleType: 'none',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '0px',
            fontSize: 14,
            fontWeight: '500',
        },
    },
    listIcon: {
        color: commonColor.themeColor,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    listIconActive: {
        color: '#848484',
        fontSize: 20,

    },
    divider: {
        width: 2,
        backgroundColor: commonColor.placeholderTextColor,
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        margin: '0px 4px'
    },
    dividerMobile: {
        width: 2,
        backgroundColor: commonColor.placeholderTextColor,
        width: '100%'

    },
    smallDivider: {
        width: 2,
        backgroundColor: commonColor.placeholderTextColor,
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        margin: '0px 10px 0px 15px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        "@media (max-width: 600px)": {
            display: 'none',
        },
    },
    imgMobBG: {
        backgroundImage: `url(${imgBG})`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 56,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    DrawerList: {
        width: '72%',
        marginLeft: "auto",
        marginRight: "auto",
        alginSelf: 'center',
        display: 'flex',
        alginItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '96%',
            marginLeft: "2%",
            marginRight: "2%",
        },
    },
    TopDrawerOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    space: {
        "@media (max-width: 600px)": {
            width: '40%',
            height: '100%',
        },
        "@media (max-width: 310px)": {
            display: 'none',
        },
    }
}));

export default useStyles;
