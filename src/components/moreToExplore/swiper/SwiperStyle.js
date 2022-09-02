import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        padding: '0px 4%',
        backgroundColor : commonColor.black,
        "@media (max-width: 960px)": {
            backgroundColor : commonColor.appBar,
            padding: '0px 0px 0px 2%',
        },
    },
    mainExploreTxt: {
        fontSize: '30px',
        color: '#ffbe0b',
        padding: '0px 4%',
        "@media (max-width: 960px)": {
            padding: '0px 0px 0px 2%',
        },
    },
    exploreContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    sideLine: {
        height: '34px',
        width: '4px',
        backgroundColor: '#ffbe0b',
    },
    heading: {
        color: '#fff',
        marginLeft: '5px'
    },
    cardDiv: {
        width: '100%',
        paddingBottom: '15px'
    },
    cardHeader: {
        position: 'relative'
    },
    iconDiv: {
        position: 'absolute',
        bottom: '5px',
        left: '10px',
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center'
    },
    iconTxt: {
        color: '#fff',
        margin: '0px 10px',
        fontSize: '14px'
    },
    cardTxt: {
        color: '#fff',
        fontSize: '15px'
    },
    arrows: {
        color: '#fff',
        fontSize: 50,
    },
    swiper_button_next: {
        margin: 0,
        width: 47, 
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent', 
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: '25.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },

      },
    swiper_button_prev: {
        margin: 0,
        width: 47, 
        height: 63,
        borderRadius: '4px',
        border: '1px solid #848484',
        color: 'transparent', 
        backgroundColor: 'rgba(102,102,103, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: '25.5%',
        zIndex: 1000,
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
    
}))
