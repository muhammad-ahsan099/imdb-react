import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    innerContainer: {
        display: 'flex',
        border: '1px solid #848484',
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft: 6,
        width: '68%',
        paddingTop: 6,
        paddingBottom: 2
    },
    modalContainer: {
        padding: '22px 0px'
    },
    fillIcon: {
        color: 'rgb(91,37,247)'
    },
    fillIconModal: {
        fontSize: 32,
        color: 'rgb(91,136,244)',
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
          },
    },
    unfillIcon: {
        color: '#848484',
    },
    unfillIconModal: {
        fontSize:32,
        color: '#848484',
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
          },
    },
    spanText: {
        marginLeft: 4,
        marginBottom: 6
    },

}));