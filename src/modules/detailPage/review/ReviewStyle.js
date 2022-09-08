import { makeStyles } from "@material-ui/core";
import imgBG from '../../../assets/images/imgBG.jpg'
import { commonColor } from "../../../constants/colors";


export const useStyles = makeStyles((theme) => ({
    list: {
        width: 400,
        "@media (max-width: 480px)": {
            width: '100vw',
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
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    img: {
        width: 80,
        height: 90,
        objectFit: 'contain',
        backgroundColor: 'pink',
        marginLeft: 10
    },
    heading: {
        margin: 0,
        display: 'inline-block',
        width: '75%',
    },
    divider: {
        backgroundColor: '#848484',
        width: '100%',
        height: 2,
        margin: '8px 0px'
    },
    bottom: {
        paddingBottom: 60,
    },
    ratingText: {
        fontWeight: '500',
        color: '#848484',
        padding: '4px 0px 4px 10px',
        backgroundColor: 'rgb(243,243,243)',
    },
    input: {
        width: '94%',
        margin: '0px 3%',
        alignSelf: 'center',
        height: 30,
        padding: '0px 10px',
        color: '#848484',
        fontWeight: '500',
        outline: 'none',
        '&: focus': {
            border: '2.5px solid #adfeff'
        }
    },
    textArea: {
        width: '94%',
        margin: '0px 3%',
        alignSelf: 'center',
        padding: '10px 10px',
        color: '#848484',
        fontWeight: '500',
        resize: 'vertical',
        marginTop: 20,
    },
    submitBtn: {
        marginTop: 20,
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        paddingTop: 3,
        paddingBottom: 3,
        textTransform: 'none',
        color: '#000',
        borderRadius: 10,
        fontWeight: '400',
        background: commonColor.white,
        '&:hover': {
            backgroundColor: 'rgba(158, 158, 158, 0.2)'
        },
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
    },
    radioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 12px',
        marginTop: 20,
    },
    radios: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottomDiv: {
        height: 45,
        background: commonColor.cardBg,
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    checkDiv: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10,
        marginTop: 6
    },
    checkIcon: {
        color: 'rgb(0,135,101)',
    },
    checkText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgb(0,101,135)',
        paddingLeft: 6,
        paddingTop: 1,
    },
    validateText: {
        color: commonColor.error,
        fontSize: 12,
        fontWeight: '500',
        paddingLeft: 6,
        paddingTop: 1,
    },
}))