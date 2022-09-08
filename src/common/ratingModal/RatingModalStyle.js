import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";
import Star from '../../assets/icons/star.svg'

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      borderRadius: 4,
      boxShadow: theme.shadows[5],
      width:'580px',
      height: '300px' ,
      backgroundColor: commonColor.cardBg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width:'90%',
        height: '300px' ,
      },
    },
    starBg:{
        marginTop: -75,
        backgroundImage: `url("${Star}")`,
        width: 100,
        height: 100,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingNo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    rateText: {
        color: 'rgb(240,201,0)',
        fontWeight: 'bold',
        margin: 0,
        fontSize: 14,
        marginTop: 30,
    },
    subHeading: {
        margin: 0,
        marginTop: 14,
        color: '#fff',
        fontSize:20,
        fontWeight: '500',
    },
    btn: {
        width: '60%',
        textTransform: 'none',
        // margin: '0px 14px 18px 0px',
        // padding: '2px 10px',
        color: '#fff',
        border: 'none',
        backgroundColor :'rgba(158, 158, 158, 0.1)',
        fontWeight: '500',
        '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(158, 158, 158, 0.4)'
        },
    }
  }));