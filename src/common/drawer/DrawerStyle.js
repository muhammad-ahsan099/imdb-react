import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = '100%';
const mobileDrawerWidth = 280

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
        backgroundColor: '#F4F6F8',
        minHeight: '100vh',

    },
    menuButton: {
        color: '##824ED2',
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('md')]: {
        //     display: 'none',
        // },

    },
    drawer: {
        width: mobileDrawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: '#000'
        },
    },
    drawerWeb: {
        width: drawerWidth,
        height: '100vh'
    },
    drawerPaper: {
        width: mobileDrawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width:'100%'
    },
    sideToolbar: {
        padding: theme.spacing(1, 1),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5, 1)
        },
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
    active: {
        background: 'linear-gradient(#824ED2, #B07DFF)',
        borderRadius: 5,
    },
    nonActive: {
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    drawerOnHover: {
        borderRadius: 50,
    },
    icons: {
        marginRight: '19px',
        color: 'red'
    },
    iconRoot: {
        textAlign: 'center',
    },
    listItemText: {
        marginLeft: '15px',
        fontSize: '25px !important',
        fontWeight: '500',
        color: '#5B6773',
        fontFamily: 'Poppins-Medium !important'

    },
    TypoText: {
        color: '#00688B',
        marginTop: '7px',
    },
    logoImg: {
        width: 140,
        // marginLeft:30,
    },
    RouterLink: {
        display: 'flex',
        textDecoration: 'none',
    },
    appBar: {
        zIndex: `${theme.zIndex.drawer + 1}!important`,
        backgroundColor: '#ffffff !important',
        borderBottom: '1px solid '
    },
    activeImg: {
        color: '#ffffff',

    },
    activeText: {
        color:'RED',
        color: '#ffffff'
    },
    sidrbarBottomCard: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F4F6F8',
        borderRadius: 10,
        height: 128,
        marginBottom: 30,
    },
    sidrbarBottomCardText: {
        margin: 0,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        color: '#5B6773',
        fontFamily: 'Roboto-SemiBold'
    } ,
    formControl: {
        minWidth: 200,
    },
    selectRoot: {
        '&:focus': {
            backgroundColor: 'transparent'
        }
    },
    sidrbarBottomDiv: {
        marginTop: 80,
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        border: '1px solid #D4DDE4',
        paddingRight: 12,
        backgroundColor: '#F4F6F8',

    },
    sidrbarBottomDivLeft: {
        backgroundColor: '#fff',
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight: '1px solid #D4DDE4',
        borderRadius: '10px 0 0 10px'

    },
    sidrbarBottomDivInner: {
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #D4DDE4'
    },
    sidrbarBottomDivInnerTwo: {
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        justifyContent: 'space-between',
    },
    sidrbarDivLeftText: {
        color: '#5B6773',
        fontSize: 16,
        fontWeight: '600',
        fontFamily:'Roboto-SemiBold'

    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    headerRightTextContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        borderRight: '1px solid #091E42',
        marginLeft: 20,
        marginRight: 20
    },
    sidebarBtn: {
        borderRadius: 6,
        height: 30,
        paddingLeft: 0,
        paddingRight: 0,
        width: 120
    }

}));

export default useStyles;
