import { makeStyles } from "@material-ui/core";
import { commonColor } from "../../constants/colors";

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
        textDecoration: 'none',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      borderRadius: 4,
      boxShadow: theme.shadows[5],
      width:'500px',
      height: 'auto' ,
      backgroundColor: commonColor.cardBg,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width:'90%',
        height: '300px' ,
      },
    },
    header: {
        padding: 20,
        backgroundColor: commonColor.cardBg,
        display: 'flex',
        alignItems: 'center',
    },
    headerMini: {
        padding: 20,
        paddingTop: 0,
        backgroundColor: commonColor.cardBg,
        display: 'flex',
        alignItems: 'center',
    },
    img: {
        width: 90,
        height: 120,
    },
    movieNameDiv: {
        marginLeft: 10
    },
    movieName: {
        color: '#848484',
        fontSize: 14,
        fontWeight: '500',
        margin: 0,
    },
    listTitle: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        margin: 0,
    },
    listDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: 'rgba(158, 158, 158, 0.4)'
        }
    },
    listName: {
        color: '#fff',
        fontSize: 16,
        margin: 0,
        fontWeight: '600'
    },
    arrow: {
        color: '#fff',
        fontSize: 20
    },
    divider: {
        width: '100%',
        height: '0.6px',
        backgroundColor: '#848484'
    },
    ratingDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    ratingsDiv: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
    },
    fillIcon: {
        color: commonColor.themeColor,
        fontSize: 40,
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
    },
    rating: {
        margin: 0,
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        [theme.breakpoints.up('xs')]: {
            fontSize: 14,
        },
    },
    totalRating: {
        color: '#848484',
        [theme.breakpoints.up('xs')]: {
            fontSize: 12,
        },
    },
    detail: {
        margin: 0,
        color: '#fff',
        fontWeight: '600',
    },
    wishlistbtn: {
        textAlign: 'center',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 20
    }
   
  }));