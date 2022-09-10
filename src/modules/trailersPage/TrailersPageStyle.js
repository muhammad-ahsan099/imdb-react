import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import TwoS from '../../assets/movies/2s.jpg'


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        backgroundColor: 'black',
    },
    leftGrid: {
        width: '100%',
        // height: 520,
        padding: 0,
        cursor: 'pointer',
        paddingLeft: '4%',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0%',
        },
        // "@media(max-width: 730px)": {
        //     height: 400,
        // },
        // "@media(max-width: 510px)": {
        //     height: 320,
        // },
    },
    rightGrid: {
        backgroundColor: commonColor.cardBg,
        width: '100%',
        padding: 0,
        height: 'auto',
        marginLeft: 0,
        paddingLeft: 16,
        paddingRight: '4%',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '2%',
            paddingRight: '2%',
        },

    },
    verticalSliderSlide: {
        display: 'flex',
        paddingTop: 4,
        marginTop: 12,
        // marginLeft: 10,
        zIndex: 1000,
    },
    smallImg: {
        width: 94,
        height: 130,
        backgroundImage: `url(${TwoS})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    movieSmallHeading: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#fff',
        margin: 0,
        padding: 0,
        lineHeight: 'normal'
    },
    movieSmallDetail: {
        color: '#848484',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'left',
        margin: 0,
        marginTop: 2,
        marginRight: 4,
        display: 'inline-block'
    },
    divider: {
        height: '1px',
        width: '100%',
        backgroundColor: 'rgb(65,65,65)',
        margin: '20px 0px'
    },
    heading: {
        color: '#fff',
        margin: 0,
        fontWeight: 32,
        fontWeight: 'bold',
    },
    desc: {
        color: '#fff',
        fontWeight: '500',
        margin: 0,
        marginBottom: 20,
    },

}))